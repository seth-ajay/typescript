"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    describe() {
        console.log(`Department: ${this.id}, ${this.name}`);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "AJ") {
            return;
        }
        this.employee.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("d1", ["Ajay"]);
it.addEmployee("Ajay");
it.addEmployee("AJ");
console.log(it);
it.describe();
const accounting1 = new AccountingDepartment("d2", []);
accounting1.addReport("Something went wrong.. !!");
accounting1.printReports();
accounting1.addEmployee("Golu");
accounting1.printEmployeeInfo();
