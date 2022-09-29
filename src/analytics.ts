/**
 * As tsconfig 'strict' is true
 * and 'noImplicitAny' not set to false
 * the function arguments: data should not be implicit refered as "any" type
 * */

// function sendAnalyticData(data) {
function sendAnalyticData(data: string) {
  console.log(data);
}

sendAnalyticData("hello");
