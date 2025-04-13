import { expect, test } from '@playwright/test';
import { ProductsPage } from '../src/pages/products.page';
import { ProductsApi } from '../src/apis/products.api';
import { GetAllProductsResponseApiModel } from '../src/models/api-models/get-all-products.response.api.model';

test.describe('Products tests', () => {
    let productsPage: ProductsPage;
    let allProducts: GetAllProductsResponseApiModel;

    const productsApi = new ProductsApi();
    test.beforeEach(async ({ page }) => {
        productsPage = new ProductsPage(page);
        await productsPage.goTo();
    });

    test.beforeAll(async () => {
        allProducts = await productsApi.getAllProducts();
    });

    test('Search product by name', async () => {
        const searchText = 'White';

        await productsPage.searchProducts(searchText);

        const products = await productsPage.getProducts();
        for (const element of products) {
            await expect(element.name).toContain(searchText);
        }
    });

    test('Filter products by category', async () => {
        const userType = allProducts.products[0].category.usertype.usertype;
        const subCategory = allProducts.products[0].category.category;

        await productsPage.filterProductsByCategory(userType, subCategory);

        const products = await productsPage.getProducts();
        const expectedProducts = allProducts.products.filter((product) => {
            return product.category.usertype.usertype == userType && product.category.category == subCategory;
        });

        const actualNames = products.map((p) => p.name).sort();
        const expectedNames = expectedProducts.map((p) => p.name).sort();
        await expect(actualNames).toEqual(expectedNames);
    });
});
