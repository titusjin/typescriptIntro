class User {
  /**
   * In plain javascript there is no need to declare name first then set in constructor.
   * eq: class.js in the same folder or check the generated js file in dist/
   * as we using es6 as compile target.
   * */
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getMyName(): string {
    return this.name;
  }

  // constrain the this as User type to void issues that mentioned below.
  printMyName(this: User): void {
    console.log(`my name is: ${this.name}`);
  }
}

const user = new User("titus");
user.printMyName();

/**
 * "this" is tricky
 * 1. one instance use user instance method as its own method
 * 2. calling the method will trigger correctly without any typescript error alert
 * 3. but return value will be "undefined"
 * 4. cause this refers to userCopy instance and it has no name property.
 *
 * this is not issue related to typescirpt
 * this is issue that javascript treat "this" keyword
 */
const userCopy = {
  name: "titus",
  printMyName: user.printMyName,
};
// userCopy.printMyName();// this will have error after we add this argument type restriction on class

/**
 * to void the above issue typescript provide a way:
 * 1. add "this" as one argument in method defined in class
 * 2. constrain "this" in the type of specific object
 * 3. then using userCopy to trigger the method: typescript will alert compile-time error.
 */
