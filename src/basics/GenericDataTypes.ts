const names: Array<string> = [];
// names[0].split("");

const nam = ["AJ", "SE"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
console.log(merge({ name1: "Ajay" }, { age: 29 }));

const mergeObj = merge(
  { name: "Ajay", hobbies: ["Skating", "Dancing"] },
  { age: "29" }
);

console.log(mergeObj.age);
console.log(mergeObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descText = "Got No Value";
  if (element.length === 1) {
    descText = "Got 1 element";
  } else if (element.length > 1) {
    descText = "Got" + element.length + "element.";
  }

  return [element, descText];
}

console.log(countAndDescribe(["sports", "cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Name: " + obj[key];
}

console.log(extractAndConvert({ name: "AJAY" }, "name"));

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Ajay");
textStorage.addItem("Seth");
textStorage.removeItem("Ajay");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(2);

console.log(numberStorage.getItems());

const objStorage = new DataStorage<object>();

objStorage.addItem({ name: "Ajay" });
objStorage.addItem({ name: "Seth" });

objStorage.removeItem({ name: "Ajay" });

console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  desc: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, desc: string, date: Date): CourseGoal {
  
let CourseGoal: Partial<CourseGoal> = {};
CourseGoal.title = title;
CourseGoal.desc = desc;
CourseGoal.completeUntil = date;
return CourseGoal as CourseGoal;
}
