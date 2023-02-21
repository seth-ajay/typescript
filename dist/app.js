"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("Hello bhai  " + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!!");
        }
        this.addReport(value);
    }
    describe() {
        console.log("New things dept Id :" + this.id);
    }
    addEmployee(name) {
        if (name === "AJ") {
            return;
        }
        this.employee.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("d1", ["Ajay"]);
console.log(Math.pow(4, 2));
it.addEmployee("Ajay");
it.addEmployee("AJ");
const employee2 = Department.createEmployee("Artist");
console.log(employee2, Department.fiscalYear);
console.log(it);
it.describe();
const accounting1 = new AccountingDepartment("d2", []);
accounting1.describe();
accounting1.mostRecentReport = "Hey, this is a Setter";
accounting1.addReport("Something went wrong.. !!");
console.log(accounting1.mostRecentReport);
accounting1.printReports();
accounting1.addEmployee("Golu");
accounting1.printEmployeeInfo();
