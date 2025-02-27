import { LandTransport } from './land-transport';
import { ICar } from './icar';

export class ElectricCar extends LandTransport implements ICar {
    public constructor() {
        super('Electric car');
    }

    public engineIsSpinning(): string {
        return 'Electric engine is spinning.';
    }
}
