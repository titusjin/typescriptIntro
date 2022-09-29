"use strict";
let userInput;
userInput = 5;
userInput = "hello";
let userName;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("error occures", 500);
