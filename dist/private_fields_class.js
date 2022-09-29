"use strict";
class Department {
    constructor(n) {
        this.dName = n;
    }
    describe() {
        console.log("Department: ", this.dName);
    }
}
const department = new Department("typescript");
department.describe();
const departmentCopy = {
    dName: "copy",
    describe: department.describe,
};
departmentCopy.describe();
