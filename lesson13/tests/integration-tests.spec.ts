import { expect } from 'chai';
import { ImageApi, FavoritesApi } from '../src/apis';
import { PostFavoritesRequestDto } from '../src/dtos';

describe('favorites test suite', () => {
    describe('favorites test ', () => {
        const subId = 'test';
        let imageId: string;
        let favoriteId: number;
        it('Upload Image', async () => {
            const imagesApi = new ImageApi();

            const [response, image] = await imagesApi.uploadImage('artifacts/cat.jpg', subId);
            imageId = image.id;
            expect(response.status).to.be.equal(201);
            expect(image.sub_id).to.be.equal(subId);
        });

        it('Add favorites for uploaded image', async () => {
            const favoritesApi = new FavoritesApi();
            const [, jsonBeforePostFavorites] = await favoritesApi.getFavorites();
            const favoritesBeforePostFavorites = jsonBeforePostFavorites.filter((f) => f.image_id == imageId);
            const favoritesDto: PostFavoritesRequestDto = { image_id: imageId, sub_id: subId };

            const [response, json] = await favoritesApi.postFavorites(favoritesDto);

            const [, jsonAfterPostFavorites] = await favoritesApi.getFavorites();
            const favoritesAfterPostFavorites = jsonAfterPostFavorites.filter((f) => f.image_id == imageId);
            favoriteId = json.id;
            expect(response.status).to.be.equal(200);
            expect(json.message).to.be.equal('SUCCESS');
            expect(favoritesAfterPostFavorites.length).to.be.equal(favoritesBeforePostFavorites.length + 1);
        });

        it('Get created favorite by Id', async () => {
            const favoritesApi = new FavoritesApi();

            const [response, json] = await favoritesApi.getFavoritesById(favoriteId);

            expect(response.status).to.be.equal(200);
            expect(json.id).to.be.equal(favoriteId);
        });
    });
});
