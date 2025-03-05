import sinon from 'ts-sinon';
import { expect } from 'chai';
import { describe } from 'mocha';
import { ElectricCar } from '../src/electric-car';

describe('ElectricCar tests', () => {
    const electricCarStubInstance = sinon.createStubInstance(ElectricCar);
    const speed = 100;
    electricCarStubInstance.getCurrentSpeed.returns(speed);

    describe('ElectricCar test', () => {
        it('ElectricCar getCurrentSpeed test', () => {
            const result = electricCarStubInstance.getCurrentSpeed();

            expect(result).to.be.equal(speed);
        });
    });

    const testString = 'Test string';
    electricCarStubInstance.move.returns(testString);
    describe('test', () => {
        it('test', () => {
            expect(electricCarStubInstance.move('Kyiv')).to.be.equal(testString);
        });
    });
});
