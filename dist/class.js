"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    getMyName() {
        return this.name;
    }
    printMyName() {
        console.log(`my name is: ${this.name}`);
    }
}
const user = new User("titus");
user.printMyName();
const userCopy = {
    name: "titus",
    printMyName: user.printMyName,
};
