"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONVERSION;
(function (CONVERSION) {
    CONVERSION[CONVERSION["AS_SRING"] = 0] = "AS_SRING";
    CONVERSION[CONVERSION["AS_NUMBER"] = 1] = "AS_NUMBER";
})(CONVERSION || (CONVERSION = {}));
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as_number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
