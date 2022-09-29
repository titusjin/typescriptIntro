"use strict";
/**
 * 'unknow' is much safer than 'any'
 *  if u really not sure what type that variable will have.
 */
let userInput;
userInput = 5;
userInput = "hello";
let userName;
/**
 * below will cause compile-time error
 * cause unknow type can't be assign to variable in string type.
 * but with type check as the second line
 * typescript will accept the assignment.
 */
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
/**
 * The below function "never" return anything cause it crashes the script
 * therefore explict can declare return type as: never
 */
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("error occures", 500);
