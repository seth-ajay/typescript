"use strict";
const names = [];
const nam = ["AJ", "SE"];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name1: "Ajay" }, { age: 29 }));
const mergeObj = merge({ name: "Ajay", hobbies: ["Skating", "Dancing"] }, { age: "29" });
console.log(mergeObj.age);
console.log(mergeObj.name);
function countAndDescribe(element) {
    let descText = "Got No Value";
    if (element.length === 1) {
        descText = "Got 1 element";
    }
    else if (element.length > 1) {
        descText = "Got" + element.length + "element.";
    }
    return [element, descText];
}
console.log(countAndDescribe(["sports", "cooking"]));
function extractAndConvert(obj, key) {
    return "Name: " + obj[key];
}
console.log(extractAndConvert({ name: "AJAY" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Ajay");
textStorage.addItem("Seth");
textStorage.removeItem("Ajay");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(2);
console.log(numberStorage.getItems());
const objStorage = new DataStorage();
objStorage.addItem({ name: "Ajay" });
objStorage.addItem({ name: "Seth" });
objStorage.removeItem({ name: "Ajay" });
console.log(objStorage.getItems());
function createCourseGoal(title, desc, date) {
    let CourseGoal = {};
    CourseGoal.title = title;
    CourseGoal.desc = desc;
    CourseGoal.completeUntil = date;
    return CourseGoal;
}
//# sourceMappingURL=GenericDataTypes.js.map