import { Speed } from "./engine";
import { ITransport } from "./itransport";

export class LandTransport implements ITransport {
    public speed = 0;
    private carType: string;

    public constructor(carType: string) {
        this.carType = carType;
    }

    public move(destination: string): void {
        this.speed = new Speed().getSpeed();
        console.log(`${this.carType} transport is moving to ${destination}`);
    }

    public getCurrentSpeed(): number {
        return this.speed;
    }
}
