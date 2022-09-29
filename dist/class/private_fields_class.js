"use strict";
class Department {
    constructor(id, dname) {
        this.id = id;
        this.dname = dname;
    }
    describe() {
        console.log("Department: ", this.dname);
    }
}
const department = new Department("d1", "typescript");
department.describe();
