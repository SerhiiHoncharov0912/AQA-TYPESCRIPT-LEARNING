import { Locator, Page } from 'playwright';

export class CategoryFilterElement {
    private get categoryHeader(): Locator {
        return this.page.locator('.panel-default');
    }

    public constructor(private page: Page) {}

    public async getCategoryHeaders(): Promise<string[]> {
        const categoryHeaders: string[] = [];

        const headers = await this.categoryHeader.all();

        for (const header of headers) {
            const headerText = await header.innerText();
            categoryHeaders.push(headerText.charAt(0).toUpperCase() + headerText.slice(1).toLowerCase());
        }

        return categoryHeaders;
    }

    public async getSubCategories(category: Locator): Promise<string[]> {
        const subCategories: string[] = [];
        const subCategoryElements = await category.locator('ul li a').all();

        for (const subCategoryElement of subCategoryElements) {
            const subCategoryText = await subCategoryElement.innerText();
            subCategories.push(subCategoryText.charAt(0).toUpperCase() + subCategoryText.slice(1).toLowerCase());
        }
        return subCategories;
    }

    public async expandCategory(categoryName: string): Promise<Locator> {
        const headers = await this.getCategoryHeaders();
        if (!headers.includes(categoryName)) {
            throw new Error(`Category with name "${categoryName}" not found.`);
        }
        const categories = await this.categoryHeader.all();
        const category = categories[headers.indexOf(categoryName)];
        await category.locator('.badge').click();
        return category;
    }

    public async selectSubCategory(categoryName: string, subCategoryName: string): Promise<void> {
        const category = await this.expandCategory(categoryName);
        const subCategoryNames = await this.getSubCategories(category);
        if (!subCategoryNames.includes(subCategoryName)) {
            throw new Error(`Category with name "${subCategoryName}" not found.`);
        }
        const subCategories = await category.locator('ul li a').all();
        await subCategories[subCategoryNames.indexOf(subCategoryName)].click();
    }
}
