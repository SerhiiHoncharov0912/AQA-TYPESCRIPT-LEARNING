export class User {
    #name;
    #address;
    constructor(name) {
        this.#name = name;
    }

    get getName() {
        return this.#name;
    }

    set setName(name) {
        this.#name = name;
    }

    get getAddress() {
        return this.#address;
    }

    set setAddress(address) {
        this.#address = address;
    }

    set setAddressStreet(street) {
        this.#address.street = street;
    }

    registerUser(name) {
        this.#name = name;
        console.log(`User with name ${this.#name} is registered successfully`);
    }
}

const user = new User('Ada');
user.setName = 'Charles';
console.log(user.getName);

user.registerUser('Robert');
user.setAddress = {
    city: "New York",
    street: 11
};
console.log(user.getAddress);
user.setAddressStreet = 'new street';
console.log(user.getAddress);
