/**
 * 1. add access-modifier in the fields (not only properties but also methods)
 * 2. constructor can be easily shortend by syntax suger that typescirpt provided.
 */

class Department {
  // id: String;
  // dName: string;

  // "readyonly" also one access modifier in typescript only.
  constructor(private readonly id: string, public dname: string) {
    // this.id = id;
    // this.dname = dname;
  }

  describe(this: Department) {
    // this.id = "d2"; this will have compile-error as id is readonly property
    console.log("Department: ", this.dname);
  }
}

const department = new Department("d1", "typescript");
department.describe();

class ITDepartment extends Department {
  constructor(id: string, dname: string) {
    super(id, "IT");
  }
}
