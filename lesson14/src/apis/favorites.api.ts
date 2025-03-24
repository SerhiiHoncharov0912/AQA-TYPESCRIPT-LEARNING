import { GetFavoritesByIdResponseDto, PostFavoritesRequestDto, PostFavoritesResponseDto } from '../dtos';
import { ApiService } from '../services/api.servise';
import { Variables } from '../utils/variables';

export class FavoritesApi {
    private _apiService: ApiService;
    public constructor(baseUrl = Variables.baseUrl) {
        this._apiService = new ApiService(baseUrl);
    }

    public async postFavorites(dto: PostFavoritesRequestDto): Promise<[Response, PostFavoritesResponseDto]> {
        const response = await this._apiService.post('/favourites', dto);

        const json = await response.json();
        return [response as Response, json];
    }

    public async getFavoritesById(favoriteId?: number): Promise<[Response, GetFavoritesByIdResponseDto]> {
        const response = await this._apiService.get(`/favourites/${favoriteId}`);

        const json = await response.json();
        return [response as Response, json];
    }

    public async getFavorites(): Promise<[Response, GetFavoritesByIdResponseDto[]]> {
        const response = await this._apiService.get('/favourites');

        const json = await response.json();
        return [response as Response, json as GetFavoritesByIdResponseDto[]];
    }
}
