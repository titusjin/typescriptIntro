class User {
  /**
   * In plain javascript there is no need to declare name first then set in constructor.
   * eq: class.js in the same folder or check the generated js file in dist/
   * as we using es6 as compile target.
   * */
  uname: string;

  constructor(n: string) {
    this.uname = n;
  }

  getMyName(): string {
    return this.uname;
  }

  // constrain the this as User type to void issues that mentioned below.
  printMyName(this: User) {
    console.log(`my name is: ${this.uname}`);
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
 *
 * To void the above issue typescript provide a way:
 * 1. add "this" as one argument in method defined in class
 * 2. constrain "this" in the type of specific object
 * 3. then using userCopy to trigger the method: typescript will alert compile-time error.
 *
 * to eliminate the compile-error
 * ** MUST make userCopy signatures totally the same as defined in User class.
 *
 */
const userCopy = {
  uname: "titus",
  getMyName(): string {
    return "";
  },
  printMyName: user.printMyName,
};
// this will have error after we add this argument type restriction on class
userCopy.printMyName();
