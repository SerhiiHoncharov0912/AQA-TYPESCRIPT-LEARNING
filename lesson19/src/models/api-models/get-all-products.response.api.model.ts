export interface GetAllProductsResponseApiModel {
    responseCode: number;
    products: Product[];
}

export interface Product {
    id: number;
    name: string;
    price: string;
    brand: string;
    category: Category;
}

export interface Category {
    usertype: Usertype;
    category: string;
}

export interface Usertype {
    usertype: string;
}
