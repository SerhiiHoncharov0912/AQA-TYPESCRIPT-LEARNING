export interface ITransport {
    speed: number;

    move(destination: string): void;
}
