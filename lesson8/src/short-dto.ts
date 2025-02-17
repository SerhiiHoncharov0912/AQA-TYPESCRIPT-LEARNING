import { Repository } from './response-interface';

export class ShortDto {
    public id: number;
    public name: string;
    public ownerId: number;
    public constructor(responseInterface: Repository) {
        this.id = responseInterface.id;
        this.name = responseInterface.name;
        this.ownerId = responseInterface.owner.id;
    }
}
