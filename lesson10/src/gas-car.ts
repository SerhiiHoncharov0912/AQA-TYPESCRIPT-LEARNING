import { Car } from './car';

export class GasCar extends Car {
    public constructor() {
        super('Gas');
    }

    public engineIsSpinning(): void {
        console.log('Gasoline engine is spinning.');
    }
}
