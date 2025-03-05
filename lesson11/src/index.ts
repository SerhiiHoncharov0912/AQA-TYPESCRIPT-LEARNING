import { ElectricCar } from "./electric-car";
import { GasCar } from "./gas-car";
import { ITransport } from "./itransport";
import { Plane } from "./plane";

function useTransport(transport: ITransport, destination: string): void {
    transport.move(destination);
}

const electricCar = new ElectricCar();
useTransport(electricCar, 'New York');
console.log(electricCar.getCurrentSpeed());

const plane = new Plane();
useTransport(plane, 'LA');
console.log(plane.getCurrentSpeed());

const gasCar = new GasCar();
useTransport(gasCar, `Kyiv`);
console.log(gasCar.getCurrentSpeed());

