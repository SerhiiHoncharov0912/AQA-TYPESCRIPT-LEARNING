export class Speed {

    public getSpeed(): number {
        return this.getRandomNumber(0, 200);
    }

    private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
