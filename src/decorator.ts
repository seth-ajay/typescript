function Logger(logSTring: string) {
    console.log("LOGGER FACTORY")
  return (constructor: Function) => {
    console.log(logSTring);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
      console.log("TEMPLATE FACTORY")
    const hookEL = document.getElementById(hookId);
    const p = new constructor();
    if (hookEL) {
      hookEL.innerHTML = template;
      hookEL.querySelector('h1')!.textContent = p.name;
    }
  };
}

@Logger('LOGGING')
@WithTemplate("<h1>My Person Object</h1>", 'apps')

class Persons {
  name = "Ajay";
  constructor() {
    console.log("Creating Persons Object...");
  }
}
const pers = new Persons();
console.log(pers);
