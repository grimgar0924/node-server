import { Person } from "./helper";

const log = (message:string) => {
console.log(message);
}

const person1 = new Person({firstname:"joey",surname:"ayala"});

log(person1.getName());




