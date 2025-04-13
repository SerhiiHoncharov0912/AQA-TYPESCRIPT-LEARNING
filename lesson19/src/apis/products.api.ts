import { GetAllProductsResponseApiModel } from '../models/api-models/get-all-products.response.api.model';
import { ApiClient } from '../services/api.client';

export class ProductsApi {
    private _client: ApiClient;

    public constructor() {
        this._client = new ApiClient();
    }

    public async getAllProducts(): Promise<GetAllProductsResponseApiModel> {
        return await this._client.get<GetAllProductsResponseApiModel>('productsList');
    }
}
