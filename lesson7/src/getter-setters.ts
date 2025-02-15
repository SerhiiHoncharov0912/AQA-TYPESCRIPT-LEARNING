export class Address {
    public declare city: string;
    public declare street: number;
}

export class User {
    #name: string;
    #address: Address;
    public constructor(name: string) {
        this.#name = name;
        this.#address = new Address();
    }

    public get name(): string {
        return this.#name;
    }

    public set name(name) {
        this.#name = name;
    }

    public get address(): Address {
        return this.#address;
    }

    public set address(address) {
        this.#address = address;
    }

    public registerUser(name: string): void {
        this.#name = name;
        console.log(`User with name ${this.#name} is registered successfully`);
    }
}

const user = new User('Ada');
user.name = 'Charles';
console.log(user.name);

user.registerUser('Robert');
user.address = {
    city: "New York",
    street: 11
};
console.log(user.address);
