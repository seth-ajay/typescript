"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employee.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employee.length);
        console.log(this.employee);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("Hello bhai  " + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found.");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value!!");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log("New things dept Id :" + this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "AJ") {
            return;
        }
        this.employee.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var it = new ITDepartment("d1", ["Ajay"]);
console.log(Math.pow(4, 2));
it.addEmployee("Ajay");
it.addEmployee("AJ");
var employee2 = Department.createEmployee("Artist");
console.log(employee2, Department.fiscalYear);
console.log(it);
it.describe();
var accounting1 = new AccountingDepartment("d2", []);
accounting1.describe();
accounting1.mostRecentReport = "Hey, this is a Setter";
accounting1.addReport("Something went wrong.. !!");
console.log(accounting1.mostRecentReport);
accounting1.printReports();
accounting1.addEmployee("Golu");
accounting1.printEmployeeInfo();
