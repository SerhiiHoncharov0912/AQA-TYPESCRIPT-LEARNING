import { Speed } from "./engine";
import { ITransport } from "./itransport";

export abstract class Car implements ITransport {
    public speed = 0;
    private carType: string;

    public constructor(carType: string) {
        this.carType = carType;
    }

    public move(destination: string): void {
        this.engineIsSpinning();
        this.speed = new Speed().getSpeed();
        console.log(`${this.carType} car is moving to ${destination}`);
    }

    public getCurrentSpeed(): number {
        return this.speed;
    }

    public abstract engineIsSpinning(): void;
}
