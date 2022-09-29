"use strict";
function add(input1, input2) {
    return input1 + input2;
}
function add1(input1, input2) {
    return input1 + input2;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 2, (result) => {
    console.log(result);
});
function addAndHandle1(input1, cb) {
    return cb("hello");
}
addAndHandle1("hello", (input) => {
    console.log("hello world! ", input);
    return input;
});
function addAsStr(input1, input2) {
    return input1.toString() + input2.toString();
}
const printResult = (num) => {
    console.info("Result = ", num);
    return;
};
printResult(add(5, 3));
console.log(printResult(add(5, 3)));
let combineValues1;
let combineValues = add;
combineValues = add1;
