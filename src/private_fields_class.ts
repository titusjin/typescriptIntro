class Department {
  dName: string;

  constructor(n: string) {
    this.dName = n;
  }

  describe(this: Department) {
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
