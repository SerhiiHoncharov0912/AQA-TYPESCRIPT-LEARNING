import { Car } from './car';

export class ElectricCar extends Car {
    public constructor() {
        super('Electric');
    }

    public engineIsSpinning(): void {
        console.log('Electric engine is spinning.');
    }
}
