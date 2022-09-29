// NOTE: typescirpt implict declare the functino return type as number
// also u can declare the return type by ur definition explictly like addAsStr function
function add(input1: number, input2: number) {
  return input1 + input2;
}
function add1(input1: number, input2: number) {
  return input1 + input2;
}

function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2;
  cb(result);
}
/**
 * while consume the fuction u can return something in the callback even the callback type is declared that
 * return value should be void and still has no compile-error.
 * Cause the return value of the callback is not matter in the addAndHandle fucnction
 * As a result, typescript ignore the type checking on reutrn value on propose.
 */
addAndHandle(10, 2, (result) => {
  console.log(result);
  // return result;
});

/** this test callback be called and return a result but container function still can declared return value as void */
function addAndHandle1(input1: string, cb: Function): void {
  return cb("hello");
}
addAndHandle1("hello", (input: string) => {
  console.log("hello world! ", input);
  return input;
});

function addAsStr(input1: number, input2: number): string {
  return input1.toString() + input2.toString();
}

/**
 * NOTE: void return type
 * JS will shown the function return "undefined"
 * but typescript not allowed return type of a function be 'undefined'
 * ex: const printResult = (num: number): undefined => {} will have compile-time error
 *     can only use void | any --> better use void
 *     if use undefined as return type this function MUST return something
 *
 */
const printResult = (num: number): undefined => {
  console.info("Result = ", num);
  return; // this line just cause return value be declare as undefined not void or any.
};
printResult(add(5, 3));
console.log(printResult(add(5, 3))); //will show undefined in console

// NOTE: initailized while declaratoin will implecit fixed type of the variable by typescript
// But if not like:
//    let combineValues;
//    combineValues = add;
//    combineValues = 5;   -->  typescript will not give any alert in compile-time
//                              which leads to run-time error.

// let combineValues1: Function --> one way to restrict the type of variable
//  or as below we can explicit declare a variable with type restirction as funtion
//  and arguments with more clear type limit.
let combineValues1: (a: number, b: number) => number;

let combineValues = add;
combineValues = add1;
