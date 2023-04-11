"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var names = [];
var nam = ["AJ", "SE"];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name1: "Ajay" }, { age: 29 }));
var mergeObj = merge({ name: "Ajay", hobbies: ["Skating", "Dancing"] }, { age: "29" });
console.log(mergeObj.age);
console.log(mergeObj.name);
function countAndDescribe(element) {
    var descText = "Got No Value";
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
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Ajay");
textStorage.addItem("Seth");
textStorage.removeItem("Ajay");
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(2);
console.log(numberStorage.getItems());
var objStorage = new DataStorage();
objStorage.addItem({ name: "Ajay" });
objStorage.addItem({ name: "Seth" });
objStorage.removeItem({ name: "Ajay" });
console.log(objStorage.getItems());
function createCourseGoal(title, desc, date) {
    var CourseGoal = {};
    CourseGoal.title = title;
    CourseGoal.desc = desc;
    CourseGoal.completeUntil = date;
    return CourseGoal;
}
