"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = (function () {
    function Person(n) {
        this.outputName = "Ajay";
        this.age = 29;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("HI");
        }
    };
    return Person;
}());
var user1;
user1 = new Person();
user1.greet("Hi there, I am ");
console.log(user1);
