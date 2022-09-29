/**
 * 1. add access-modifier in the fields (not only properties but also methods)
 * 2. constructor can be easily shortend by syntax suger that typescirpt provided.
 */

class Department {
  // id: String;
  // dName: string;

  constructor(private id: string, public dname: string) {
    // this.id = id;
    // this.dname = dname;
  }

  describe(this: Department) {
    console.log("Department: ", this.dname);
  }
}

const department = new Department("d1", "typescript");
department.describe();
