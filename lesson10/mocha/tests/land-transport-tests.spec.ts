import { LandTransport } from '@src/land-transport';
import assert from 'assert';


describe('Gas car tests suite', () => {
    describe('Car returns message about engine', () => {
        const destination = 'Kyiv';
        const carType = 'Gas car';
        const gasCar = new LandTransport(carType);

        it('', () => {
            assert.equal(gasCar.move(destination), `${carType} transport is moving to ${destination}`);
        });
    });
});
