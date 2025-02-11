export class User {
    #name;
    #address;
    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get address() {
        return this.#address;
    }

    set address(address) {
        this.#address = address;
    }

    registerUser(name) {
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
