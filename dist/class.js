"use strict";
class User {
    constructor(n) {
        this.uname = n;
    }
    getMyName() {
        return this.uname;
    }
    printMyName() {
        console.log(`my name is: ${this.uname}`);
    }
}
const user = new User("titus");
user.printMyName();
const userCopy = {
    uname: "titus",
    getMyName() {
        return "";
    },
    printMyName: user.printMyName,
};
userCopy.printMyName();
