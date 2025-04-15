import { ProductsPage } from '../src/pages/products.page';
import { ProductsApi } from '../src/apis/products.api';
import { GetAllProductsResponseApiModel } from '../src/models/api-models/get-all-products.response.api.model';
import { expect } from 'chai';
import { getPage } from './browser-setup';

describe('Products tests', () => {
    let productsPage: ProductsPage;
    let allProducts: GetAllProductsResponseApiModel;

    const productsApi = new ProductsApi();
    beforeEach(async () => {
        const page = getPage();
        productsPage = new ProductsPage(page);
        await productsPage.goTo();
    });

    before(async () => {
        allProducts = await productsApi.getAllProducts();
    });

    describe('Products testss', () => {
        it('Search product by name', async () => {
            const searchText = 'White';

            await productsPage.searchProducts(searchText);

            const products = await productsPage.getProducts();
            for (const element of products) {
                await expect(element.name).to.contain(searchText);
            }
        });

        it('Filter products by category', async () => {
            const userType = allProducts.products[0].category.usertype.usertype;
            const subCategory = allProducts.products[0].category.category;

            await productsPage.filterProductsByCategory(userType, subCategory);

            const products = await productsPage.getProducts();
            const expectedProducts = allProducts.products.filter((product) => {
                return product.category.usertype.usertype == userType && product.category.category == subCategory;
            });

            const actualNames = products.map((p) => p.name);
            const expectedNames = expectedProducts.map((p) => p.name);
            await expect(actualNames).to.have.all.members(expectedNames);
        });
    });
});
