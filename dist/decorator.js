"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Logger(logSTring) {
    console.log("LOGGER FACTORY");
    return (constructor) => {
        console.log(logSTring);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log("TEMPLATE FACTORY");
        const hookEL = document.getElementById(hookId);
        const p = new constructor();
        if (hookEL) {
            hookEL.innerHTML = template;
            hookEL.querySelector('h1').textContent = p.name;
        }
    };
}
let Persons = class Persons {
    constructor() {
        this.name = "Ajay";
        console.log("Creating Persons Object...");
    }
};
Persons = __decorate([
    Logger('LOGGING'),
    WithTemplate("<h1>My Person Object</h1>", 'apps'),
    __metadata("design:paramtypes", [])
], Persons);
const pers = new Persons();
console.log(pers);
//# sourceMappingURL=decorator.js.map