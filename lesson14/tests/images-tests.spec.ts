import { expect } from 'chai';
import { ImagesApi as ImagesApi } from '../src/apis';
import { StatusCodes } from 'http-status-codes';

describe('images test suite', () => {
    describe('images test', () => {
        const imagesApi = new ImagesApi();

        it('Upload image with sub_id success test', async () => {
            const subId = 'testSubId';

            const [response, image] = await imagesApi.uploadImage('artifacts/cat.jpg', subId);

            expect(response.status).to.be.equal(StatusCodes.CREATED);
            expect(image.sub_id).to.be.equal(subId);
        });

        it('Upload image without sub_id success test', async () => {
            const [response, image] = await imagesApi.uploadImage('artifacts/cat.jpg');

            expect(response.status).to.be.equal(StatusCodes.CREATED);
            expect(image.sub_id).to.be.equal(undefined);
        });

        it('Upload image with breed_ids success test', async () => {
            const breedId = 'abys';

            const [response, image] = await imagesApi.uploadImage('artifacts/cat.jpg', undefined, [breedId]);

            expect(response.status).to.be.equal(StatusCodes.CREATED);
            expect(image.breed_ids).to.be.equal(breedId);
        });

        it('Upload text file instead of image', async () => {
            const [response] = await imagesApi.uploadImage('artifacts/test.txt');

            expect(response.status).to.be.equal(StatusCodes.BAD_REQUEST);
        });
    });
});
