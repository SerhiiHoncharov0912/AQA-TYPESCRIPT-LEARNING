import { ProductElement } from '../elements/product.element';
import { IProductDetails as IProductDetailsPageModel } from '../models/product-details.pm';
import { CategoryFilterElement } from '../elements/category.element';
import { Locator, Page } from 'playwright';

export class ProductsPage {
    private baseUrl = 'https://www.automationexercise.com';

    private get searchInput(): Locator {
        return this.page.locator('input[id="search_product"]');
    }

    private get searchButton(): Locator {
        return this.page.locator('[id=submit_search]');
    }

    private get product(): Locator {
        return this.page.locator('.product-image-wrapper');
    }

    public constructor(private page: Page) {}

    public async goTo(): Promise<void> {
        const url = `${this.baseUrl}/products`;
        await this.page.goto(url);
        await this.searchInput.waitFor();
    }

    public async searchProducts(text: string): Promise<void> {
        await this.searchInput.fill(text);
        await this.searchButton.click();
    }

    public async getProducts(): Promise<IProductDetailsPageModel[]> {
        const products = await this.product.all();
        const productDetails: IProductDetailsPageModel[] = [];

        for (const p of products) {
            const productElement = new ProductElement(p);
            const details = await productElement.getProductDetails();
            productDetails.push(details);
        }

        return productDetails;
    }

    public async filterProductsByCategory(category: string, subCategory: string): Promise<void> {
        const categoryFilter = new CategoryFilterElement(this.page);
        await categoryFilter.selectSubCategory(category, subCategory);
    }
}
