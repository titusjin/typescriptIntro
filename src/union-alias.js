"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum is typescirpt feture that added vanilla javascript
var CONVERSION;
(function (CONVERSION) {
    CONVERSION[CONVERSION["AS_SRING"] = 0] = "AS_SRING";
    CONVERSION[CONVERSION["AS_NUMBER"] = 1] = "AS_NUMBER";
})(CONVERSION || (CONVERSION = {}));
function combine(input1, input2, 
//NOTE: Literial Types --> Implicit fix type for resultConversion, also restrict the value of the parameter
resultConversion
// resultConversion: CONVERSION
) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as_number"
    // resultConversion === CONVERSION.AS_NUMBER
    ) {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
