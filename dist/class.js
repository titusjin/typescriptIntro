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
    sayhello(text = "") {
        console.log("hello ", text);
    }
}
const user = new User("titus");
user.printMyName();
const uerCopy = {
    printMyName: user.printMyName,
};
uerCopy.printMyName();
