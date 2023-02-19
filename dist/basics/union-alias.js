"use strict";
function combine(input1, input2, resultType) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAges = combine(30, 26, "as-number");
const combineStringAges = combine("30", "26", "as-number");
console.log(combineAges);
console.log(combineStringAges);
const combineNames = combine("Ajay", " Seth", "as-text");
console.log(combineNames);
