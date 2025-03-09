import { LandTransport } from './land-transport';
import { ICar } from './icar';
import { Address } from './address';

export class GasCar extends LandTransport implements ICar {
    public constructor() {
        super('Gas car');
    }

    public engineIsSpinning(): Address {
        return new Address('street', 1);
    }
}
