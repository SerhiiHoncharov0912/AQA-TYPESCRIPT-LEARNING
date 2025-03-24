import { ImageDto } from '../dtos/image.dto';
import { ApiService } from '../services/api.servise';
import * as fs from 'fs';
import { Variables } from '../utils/variables';

export class ImagesApi {
    private _apiService: ApiService;
    public constructor(baseUrl = Variables.baseUrl) {
        this._apiService = new ApiService(baseUrl);
    }

    public async uploadImage(path: string, subId?: string, breedIds?: string[]): Promise<[Response, ImageDto]> {
        const file = fs.readFileSync(path);
        const binaryFile = new File([file], 'cat.jpg', { type: 'image/jpeg' });

        const formData = new FormData();
        formData.append('file', binaryFile);
        if (subId) formData.append('sub_id', subId);
        if (breedIds) formData.append('breed_ids', breedIds.join(','));

        const response = await this._apiService.postForm('/images/upload', formData);

        const json = response.status == 201 ? await response.json() : null;
        return [response as Response, json];
    }

    public async getBreedsByImageId(imageId: string): Promise<[Response, string]> {
        const response = await this._apiService.get(`/images/${imageId}/breeds`);

        const json = await response.json();
        return [response, json];
    }
}
