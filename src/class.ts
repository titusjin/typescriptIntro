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

  printMyName(): void {
    console.log(`my name is: ${this.name}`);
  }

  sayhello(text: string = ""): void {
    console.log("hello ", text);
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
 */
const uerCopy = {
  printMyName: user.printMyName,
};

uerCopy.printMyName();
