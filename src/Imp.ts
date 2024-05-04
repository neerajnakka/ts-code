//Nullish coalescing operator (??) in ts

let speed: number | null = null;
let speed2: number = speed ?? 0; //it means if speed is null or undefined it will return 0 else it will return speed value

// type Asertion in ts (as) or <type>
//we are using type assertion in ts to tell the compiler that we know the type of a variable and we are assigning it so consider it as that type

let phone = document.getElementById('phone') as HTMLInputElement; //we give a type assertion here
phone.value = 'hello'; //without type assertion it will throw error
//you can also write in other way by prefixing it with <>
let phone2 = <HTMLInputElement>document.getElementById('phone2');

//unknown in ts : unknown is a type that can be assigned to any value or any data type value
//unknown is different from any : unknown throws error if we try to assign any value to unknown so we use narrpwing concept

function render(document: unknown) {
  // narrowing is used to say the type of document
  //for any there is no need of narrowing as it takes any type
  if (typeof document === 'string') {
    document.toLowerCase();
  } else if (typeof document === 'number') {
    document.valueOf(); //use narrrowing to say document is a number
  } else if (document instanceof HTMLElement) {
    document.appendChild(document.cloneNode());
  }
}

//typeof and instanceof in ts
//typeof operator tells the type of a variable
//instanceof operator is used to say that does it belongs/instance to a particular object/variable/class
//instanceof operator is boolean
console.log(typeof 10); //number
// console.log(vote1 instanceof Function); //true

// Never type in ts
//never type is used to tell the compiler that a function will never return anything
function neverReturn(): never {
  while (true) {}
}
neverReturn(); //if we call this function it will throw error or else below codes is not reachable
console.log('hello'); //but it will not throw error as it is never type is used and we are saying it never return anything

// Object oriented programming in ts
//class : used to define structure of an object or it is blueprint of an object
class PersonObj {
  name: string;
  age: number;
  //constructor is used to initialize the object after creation if not provided it will throw error
  //constructor always returns the instance of the class/object like class name
  //constructor should not have any explicit return type it throws error as class itself decides implicitly
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  //methods in class
  vote(age: number): void {
    if (age >= 18) {
      console.log('Yes');
    } else {
      throw new Error('Not eligible');
    }
  }
}

let person = new PersonObj('neeraj', 22);
person.vote(22);

//getter and setter in ts
//we use get and set keywords in ts to define getter and setter
// get balancer(): number {
//   return this.balance;
// }
// set balancer(value: number) {
//   this.balance = value;
// }

//Index Signatures in ts:
// In ts we cannot add or remove properties in an object and we cannot change the type of the properties dynamically
// so we use index signatures in ts to achieve that feature of adding or removing properties in an object dynamically
class SeatIndex {
  //normally we do
  //   A1: string;
  //   A2: string;
  //but in index signature we do
  [seatNumber: string]: string; //here seatNumber is of string type and value can be any string
}
//adding properties dynamically if index signature is not used it will only allow A1 and A2 but if used we can add more
let seats = new SeatIndex();
seats.A1 = 'hello';
seats.A2 = 'world';
seats.A3 = 'world';
seats.A4 = 'world';

//method overriding in ts: we use override keyword  before a method we are overriding

//declaration files in ts (.d.ts):
// we use this specific all our types /declaration info and use it in .ts
//everything in .d.ts must be implemented in .ts
