import { LandTransport } from './land-transport';
import { ICar } from './icar';

export class GasCar extends LandTransport implements ICar {
    public constructor() {
        super('Gas car');
    }

    public engineIsSpinning(): string {
        return 'Gasoline engine is spinning.';
    }
}
