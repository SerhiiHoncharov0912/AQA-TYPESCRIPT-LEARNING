import sinon from 'ts-sinon';
import { expect } from 'chai';
import { describe } from 'mocha';
import { ElectricCar } from '../src/electric-car';

describe('ElectricCar tests', () => {
    const electricCarStubInstance = sinon.createStubInstance(ElectricCar);

    describe('ElectricCar test', () => {
        it('ElectricCar getCurrentSpeed test', () => {
            //Arrange
            const speed = 100;
            electricCarStubInstance.getCurrentSpeed.returns(speed);

            //Act
            const result = electricCarStubInstance.getCurrentSpeed();

            //Assert
            expect(result).to.be.equal(speed);
        });
    });

    describe('test', () => {
        it('test', () => {
            //Arrange
            const testString = 'Test string';
            electricCarStubInstance.move.returns(testString);

            //Act
            const response = electricCarStubInstance.move('Kyiv');

            //Assert
            expect(response).to.be.equal(testString);
        });
    });
});
