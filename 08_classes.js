class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}

let person = new Person('Amy');

person.introduce(); // My name is Amy
