"use strict";
var _a;
var e1 = {
    name: "Ajay",
    privileges: ["Create-Server"],
    startDate: new Date(),
};
function adds(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = adds("max", "schawas");
result.split("");
var fetchedUserData = {
    id: "u1",
    name: "Ajay",
    job: { title: "CEO", desx: "My own company" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = "";
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
