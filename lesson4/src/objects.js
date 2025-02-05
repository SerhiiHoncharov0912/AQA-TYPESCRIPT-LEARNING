const person = {
    firstNme: 'Ada',
    lastName: 'King',
    age: 36,
    profession: 'Mathematician',
    children: [
        { name: 'Byron', age: 8 },
        { name: 'Robert', age: 5 }
    ],
    isAlive: false,
    birthYear: 1815,
    address: {
        country: 'United Kingdom',
        city: 'London',
        address: 'Somerset House'
    },
    changeAddress(newAddress) {
        this.address = newAddress;
    },
    addKid(kid) {
        this.children.push(kid);
    },
    printChildren() {
        this.children.forEach(cild => {
            console.log(`${cild.name} is ${cild.age} years old.`);
        });
    }
};

person.addKid({ name: 'Charles', age: 3 });
person.printChildren();
