export class Address {
    public city: string;
    public street: number;

    public constructor(city: string, street: number) {
        this.city = city;
        this.street = street;
    }
}

export class User {
    #name: string;
    #address: Address;
    public constructor(name: string, city: string, street: number) {
        this.#name = name;
        this.#address = new Address(city, street);
    }

    public get name(): string {
        return this.#name;
    }

    public set name(name: string) {
        this.#name = name;
    }

    public get address(): Address {
        return this.#address;
    }

    public set address(address: Address) {
        this.#address = address;
    }

    public registerUser(name: string): void {
        this.#name = name;
        console.log(`User with name ${this.#name} is registered successfully`);
    }
}

const user = new User('Ada', 'LA', 15);
user.name = 'Charles';
console.log(user.name);
console.log(user.address);

user.registerUser('Robert');
user.address = new Address('New York', 11);
console.log(user.address);
