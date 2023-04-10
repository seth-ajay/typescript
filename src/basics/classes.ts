abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: number
  // private name: String;
  protected employee: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id= id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    //validation
    // this.id = 'D2'
    this.employee.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe(){
    console.log("Hello bhai  "+ this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  describe(){
    console.log("New things dept Id :" + this.id)
  }
  addEmployee(name: string) {
    if (name === "AJ") {
      return;
    }
    this.employee.push(name);
  }

  addReport(text: string) {
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

// accounting.employee[2]= "ANNA";

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
// const accountingCopy = {name: "DUMMY NAME", employee:["AJ"], describe: accounting.describe};

// accountingCopy.describe();
