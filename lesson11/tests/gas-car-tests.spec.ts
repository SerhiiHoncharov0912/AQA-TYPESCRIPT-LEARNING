import sinon from 'ts-sinon';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { GasCar } from '../src/gas-car';
import { Address } from '../src/address';

describe('GasCar tests', () => {
    const gasCarStubInstance = sinon.createStubInstance(GasCar);

    const address: Address = new Address('Some Street', 33);

    gasCarStubInstance.engineIsSpinning.returns(address);

    describe('engineIsSpinning', () => {
        it('should return the address', () => {
            expect(gasCarStubInstance.engineIsSpinning()).to.be.equal(address);
        });
    });
});
