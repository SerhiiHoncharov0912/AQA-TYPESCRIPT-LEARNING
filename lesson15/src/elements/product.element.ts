import { Locator } from 'playwright';
import { IProductDetails } from '../models/product-details.pm';

export class ProductElement {
    private get name(): Locator {
        return this.baseLocator.locator('.productinfo p');
    }

    private get price(): Locator {
        return this.baseLocator.locator('.productinfo h2');
    }

    private get addToCartButton(): Locator {
        return this.baseLocator.locator('[class="productinfo text-center"] [class="btn btn-default add-to-cart"]');
    }

    public constructor(private baseLocator: Locator) {}

    public async getProductName(): Promise<string> {
        return await this.name.innerText();
    }

    public async clickAddToCartButton(): Promise<void> {
        return await this.addToCartButton.click();
    }

    public async getProductDetails(): Promise<IProductDetails> {
        const name = await this.getName();
        const price = await this.getPrice();

        return {
            name,
            price
        };
    }

    private async getName(): Promise<string> {
        const name = await this.name.textContent();
        return name?.trim() ?? '';
    }

    private async getPrice(): Promise<number> {
        const price = await this.price.textContent();
        return Number(price?.trim().replace('Rs. ', ''));
    }
}
