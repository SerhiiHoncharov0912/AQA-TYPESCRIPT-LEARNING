import { GasCar } from '@src/gas-car';
import { expect } from 'chai';
import assert from 'assert';

describe('Gas car tests suite', () => {
    describe('Car speed is > 0 if car is moving', () => {
        const gasCar = new GasCar();
        it('Gas car is moving', () => {
            gasCar.move('LA');
        });

        it('Assert speed', () => {
            expect(gasCar.getCurrentSpeed()).to.be.greaterThan(0);
        });
    });

    describe('Speed is 0 if car is not moving', () => {
        const gasCar = new GasCar();
        it('Assert speed', () => {
            expect(gasCar.getCurrentSpeed()).to.be.equal(0);
        });
    });

    describe('Car returns message about engine', () => {
        const gasCar = new GasCar();
        const destination = 'Kyiv';
        it('', () => {
            assert.equal(gasCar.move(destination), `Gas car transport is moving to ${destination}`);
        });
    });
});
