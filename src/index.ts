//Assign types to data types
let x: number = 10;
let y: string = 'hello';
let z: boolean = false;
let z1: null = null;
// x = 'not a number'; // throws error as string cant be assigned to number
let z2: any = 5;
z2 = 'string';
z2 = true;
//any is a special data type in ts that can be replaced with any other data type value

//Arrays in ts
//in js let num=[1,2,3,'no'] as it is dynamic array it will allow any type of data
//In ts we define types to arrays by using :number[] or :string[]
let numArr: number[] = [1, 2, 3];
let booArr: boolean[] = [true, false];
let strArr: string[] = ['hello', 'world'];
//but without declaring type it will be any type array
let anyArr = [];
anyArr.push(1);
anyArr.push('hello'); //it can take any data type values

//Tupes in ts : a fixed size arrray with different types
let numStr: [number, string] = [1, 'hello'];
//the postions cannot be interchanged and also not exceed the specified data types number and we cannot add or remove more or less than the specified number of data types
let numStr1: [string, number, boolean] = ['hello', 1, true];
// let numStr2: [string, number, boolean] = ['hello', 1, true, 'no']; //throws error as we mentioned only 3 data types and 4 values
// let numStr3: [string, number, boolean] = ['hello', 1]; //throws error as we mentioned  3 data types and has 2 values
let numStr3: [string | number, number] = ['hello', 1]; //we can use | to specify more than 1 data type
let nums: string | number = numStr3[0];
let numn: number = numStr3[1];

//Enums in ts : used to define a set of named constants
//we can assign values to enums in ts by using enum keyword
//enums make it easier to work with a group of related values that are known at compile time.
//instead of writing const small='s' and const medium='m' and const large='l' we can use enum keyword and assign values to enums
const enum Nums {
  One,
  Two,
  Three,
} // by default enum starts from 0 and increments by 1 one=0,two=1,three=2 or one=1,two=2,three=3 if values are not specified
enum Size {
  Small = 's', //small=0
  Medium = 'm', //medium=1
  Large = 'l', //large=2
}
console.log(Nums.One, Size.Small); //Accessing using enum Name.value
let num1: Nums = Nums.One;
let size1: Size = Size.Small;
console.log(size1, num1); //Accessing by assigning enum type to a variable

//functions in ts
//typescript will infer the return type of the function if not specified in below the type of function is number becuase return type is a number
//parameters in ts are also inferred if not specified but parameter type must be specified
function calculateTax(income: number) {
  return 0;
}
//assign a type to a function it can also be void type if no return type or value is specified
function calculateTax1(income: number = 2022): number {
  return 0; //it throws error is a string or any other is returned
}

calculateTax(10); //if passed more or less ts throws error but in js it does not care even if we pass more or less
//useful config for  functions
// noUnusedLocals: true,noImplicitReturns:true, noUnusedParameters:true

//Objects in ts
//For objects we pass object as a type and assign types to the keys in the object
let employee: { id: number; name: string } = { id: 1, name: 'neeraj' };
//it best to include all the keys in the object if missed it might give error ex :let employee: { id: number; name: string } = { id: 1};
//instead do optional let employee: { id: number; name?: string } = { id: 1 }; but remember the value with key optional is undefined
employee.id = 2;
//now if you want to make the values in object read only and not changable later on we can use readonly keyword
let employee1: { readonly id: number; name: string } = {
  id: 1,
  name: 'neeraj',
};
// employee1.id = 2; //it is not possible it throws error
let employee2: { id: number; name: string; retire: (date: Date) => void } = {
  id: 1,
  name: 'neeraj',
  retire: (date: Date) => {
    console.log(date);
  },
};

//type alias in ts: it is used to create a reusable type and assign it to a variable or an object or an array or a function and use it in the code as a type alias
//type makes it easy to work with objects or arrays
//first we create type and declare all keys with types in it   and we pass  the type in the object as its type
type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void; // here we pass a function and with its return type
};
//now pass the type alias as type to the object
let employee3: Employee = { id: 1, name: 'neeraj', retire: (date) => {} };
//this way it simplifies the code of writing objects

//=>Union types in ts
//union type is used to assign more than one type to a variable
let id5: number | string = 1;
id5 = 'hello';

function kgToLbs(weight: number | string): number {
  //Narrowing : a conversion that is done automatically in ts it displays the methods based on its use like number methods to use if it is number
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
kgToLbs(10);
kgToLbs('10kg');

//=> Intersection type: used to assign multiple types to a variable and use them in the code as intersection
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
//now two types are combined together and used in the code
type UIWidget = Draggable & Resizable;
//the now using the intersection type should implement all the methods in both the types
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//=> Extending types: using intersection type to extend an existing type
type Employee2 = {
  id: number;
  name: string;
};
type Manager = Employee2 & {
  project: string;
};
let company: Manager = { id: 1, name: 'neeraj', project: 'typescript' };

//=>Literal Types: used to assign specific values to a variable and use
//literal type is used to limit the values that can be assigned to a variable or the specified values should only be assigned
let l1: 50 = 50; // it says that only 50 literal should be assigned to l1
let l2: 50 | 100 = 100; //here l2 can be 50 or 100
type name = 'neeraj' | 'chandra'; //literal
let l3: name = 'neeraj'; // here name can be only neeraj or chandra
