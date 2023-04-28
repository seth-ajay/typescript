"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.outputName = "Ajay";
        this.age = 29;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("HI");
        }
    }
}
let user1;
user1 = new Person();
user1.greet("Hi there, I am ");
console.log(user1);
//# sourceMappingURL=interface.js.map