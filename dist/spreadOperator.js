"use strict";
const arr = ["titus", "jin"];
const addhanlder = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
addhanlder(1, 2, 3, 4, 5);
