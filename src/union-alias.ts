import ConversionStrType from "./customtype";

// enum is typescirpt feture that added vanilla javascript
enum CONVERSION {
  "AS_SRING",
  "AS_NUMBER",
}

// custom types declaration
type Combinable = string | number;

function combine(
  input1: Combinable,
  input2: Combinable,
  //NOTE: Literial Types --> Implicit fix type for resultConversion, also restrict the value of the parameter
  resultConversion: ConversionStrType
  // resultConversion: CONVERSION
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as_number"
    // resultConversion === CONVERSION.AS_NUMBER
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
