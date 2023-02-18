// const person: {
//     name: String;
//     age: number;
// } = {

// const person:{
//     name: String;
//     age: number;
//     hobbies: string[];
//     role:[number,string];
// } = {
//   name: "Ajay",
//   age: 28,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'Author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHER = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Ajay",
  age: 28,
  hobbies: ["Singing", "Table-Tennis"],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1]= 10;

let favActivity: any[]; //any[]
favActivity = ["abc", "efh"];
// console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is admin");
}
