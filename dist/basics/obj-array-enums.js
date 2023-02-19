"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Ajay",
    age: 28,
    hobbies: ["Singing", "Table-Tennis"],
    role: Role.ADMIN,
};
let favActivity;
favActivity = ["abc", "efh"];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log("is admin");
}
