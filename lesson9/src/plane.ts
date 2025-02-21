import { Speed } from "./engine";
import { ITransport } from './itransport';

export class Plane implements ITransport {
    public speed = 0;

    public move(destination: string): void {
        this.speed = new Speed().getSpeed();
        console.log(`Plane is flying to ${destination}`);
    }

    public getCurrentSpeed(): number {
        return this.speed;
    }
}
