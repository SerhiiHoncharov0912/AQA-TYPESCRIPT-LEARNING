import { expect } from 'chai';
import { ImageApi, FavoritesApi } from '../src/apis';
import { PostFavoritesRequestDto, GetFavoritesByIdResponseDto } from '../src/dtos';
import { MatchersV3, PactV4, SpecificationVersion } from '@pact-foundation/pact';
import { Variables } from '../src/utils/variables';

describe('favorites test suite', () => {
    describe('favorites test ', () => {
        const subId = 'test';
        let imageId: string;
        let favoriteId: number;
        let favoritesApi = new FavoritesApi();

        before(async () => {
            const imagesApi = new ImageApi();

            const [, image] = await imagesApi.uploadImage('artifacts/cat.jpg', subId);
            imageId = image.id;
            const favoritesDto: PostFavoritesRequestDto = { image_id: imageId, sub_id: subId };

            const [, json] = await favoritesApi.postFavorites(favoritesDto);

            favoriteId = json.id;
        });

        it('Get favorites by id contract test', () => {
            const provider = new PactV4({
                consumer: 'favorites-consumer-v4',
                provider: 'favorites-provider-v4',
                spec: SpecificationVersion.SPECIFICATION_VERSION_V4
            });

            const favoritesExample: Partial<GetFavoritesByIdResponseDto> = {
                id: 232413577,
                user_id: '1ejqec',
                image_id: 'asf2',
                sub_id: 'my-user-1234',
                created_at: '2023-10-28T17:39:28.000Z',
                image: {}
            };

            const expectedBody = MatchersV3.like(favoritesExample);

            describe('Get favorites by id contract tests', () => {
                it('Get favorites by id contract test', () => {
                    provider
                        .addInteraction()
                        .given('Image is created')
                        .given('Favorite is added to image')
                        .uponReceiving('a request to get favorites by id')
                        .withRequest('GET', `/favourites/${favoriteId}`, (builder) => {
                            builder.headers({
                                accept: 'application/json',
                                'x-api-key': Variables.apiKey
                            });
                        })
                        .willRespondWith(200, (builder) => {
                            builder.headers({
                                'Content-Type': 'application/json'
                            });
                            builder.jsonBody(expectedBody);
                        })
                        .executeTest(async (mockServer) => {
                            favoritesApi = new FavoritesApi(mockServer.url);
                            const [, json] = await favoritesApi.getFavoritesById(favoriteId);

                            expect(json).to.contain.keys('id', 'user_id', 'image_id', 'sub_id', 'created_at', 'image');
                            expect(json.user_id).to.be.a('number');
                            expect(json.image_id).to.be.a('string');
                            expect(json.sub_id).to.be.a('string');
                            expect(json.created_at).to.be.a('string');
                            expect(json.image).to.be.a('object');
                        });
                });
            });
        });
    });
});
