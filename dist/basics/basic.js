"use strict";
function add1(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
        return "Report error when not all code paths in function return a value.";
    }
    else
        return n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
const printResults = true;
const resultPhrase = "Result is: ";
add1(number1, number2, printResults, resultPhrase);
