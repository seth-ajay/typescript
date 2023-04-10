type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevateEmployee = Admin & Employee;
// interface ElevateEmployee extends Employee, Admin {}

const e1: ElevateEmployee = {
  name: "Ajay",
  privileges: ["Create-Server"],
  startDate: new Date(),
};

type combinable = string | number;
type numeric = number | boolean;
type universal = combinable & number;

function adds(a: number, b: number): number;
function adds(a: string, b: string): string;
function adds(a: number, b: string): string;
function adds(a: string, b: number): string;
function adds(a: combinable, b: combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = adds("max", "schawas");
result.split("");

const fetchedUserData = {
  id: "u1",
  name: "Ajay",
  job: { title: "CEO", desx: "My own company" },
};

console.log(fetchedUserData?.job?.title);

const userInput = "";
const storedData = userInput ?? 'DEFAULT';

console.log(storedData)

// type unknownEmployee = Employee | Admin;
// function printEmpInfo(emp: unknownEmployee) {
//   console.log("Name : " + emp.name);
//   if ("privileges" in emp) {
//     console.log("privileges : " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("privileges : " + emp.startDate);
//   }
// }

// printEmpInfo(e1);

// printEmpInfo({
//   name: " Ajay",
//   startDate: new Date(),
//   privileges: ["NONE", " None1"],
// });

// class Car {
//   drive() {
//     console.log("driving..");
//   }
// }

// class Truck {
//   drive() {
//     console.log("driving a truck..");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading Cargo : " + amount);
//   }
// }

// type vehicle = Car | Truck;

// const v1 = new Car();

// const v2 = new Truck();

// function useVehicle(vehicle: vehicle) {
//   vehicle.drive();

//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving at speed :" + speed);
// }
// moveAnimal({ type: "bird", flyingSpeed: 10 });

// const userInputType = (<HTMLInputElement>(
//   document.getElementById("user-input")!
// )) as HTMLInputElement;
// userInputType.value = "Hi there!";

// interface ErrorContainer {
//   // { email: "Not a vaid email", userName: "Must start with a character !" }
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "not a valid email!",
//   username: "must start with a capital character!",
// };
