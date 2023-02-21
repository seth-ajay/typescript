class Department {
  // private readonly id: number
  // private name: String;
  protected employee: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id= id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department: ${this.id}, ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "AJ") {
      return;
    }
    this.employee.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Ajay"]);

it.addEmployee("Ajay");
it.addEmployee("AJ");

// accounting.employee[2]= "ANNA";

console.log(it);

it.describe();

const accounting1 = new AccountingDepartment("d2", []);
accounting1.addReport("Something went wrong.. !!");
accounting1.printReports();
accounting1.addEmployee("Golu");

accounting1.printEmployeeInfo()
// const accountingCopy = {name: "DUMMY NAME", employee:["AJ"], describe: accounting.describe};

// accountingCopy.describe();
