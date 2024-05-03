'use strict';
//Assign types to data types
let x = 10;
let y = 'hello';
let z = false;
let z1 = null;
// x = 'not a number'; // throws error as string cant be assigned to number
let z2 = 5;
z2 = 'string';
z2 = true;
//any is a special data type in ts that can be replaced with any other data type value
//Arrays in ts
//in js let num=[1,2,3,'no'] as it is dynamic array it will allow any type of data
//In ts we define types to arrays by using :number[] or :string[]
let numArr = [1, 2, 3];
let booArr = [true, false];
let strArr = ['hello', 'world'];
//but without declaring type it will be any type array
let anyArr = [];
anyArr.push(1);
anyArr.push('hello'); //it can take any data type values
//Tupes in ts : a fixed size arrray with different types
let numStr = [1, 'hello'];
//the postions cannot be interchanged and also not exceed the specified data types number and we cannot add or remove more or less than the specified number of data types
let numStr1 = ['hello', 1, true];
// let numStr2: [string, number, boolean] = ['hello', 1, true, 'no']; //throws error as we mentioned only 3 data types and 4 values
// let numStr3: [string, number, boolean] = ['hello', 1]; //throws error as we mentioned  3 data types and has 2 values
let numStr3 = ['hello', 1]; //we can use | to specify more than 1 data type
let nums = numStr3[0];
let numn = numStr3[1];
var Size;
(function (Size) {
  Size['Small'] = 's';
  Size['Medium'] = 'm';
  Size['Large'] = 'l';
})(Size || (Size = {}));
console.log(0 /* Nums.One */, Size.Small); //Accessing using enum Name.value
let num1 = 0; /* Nums.One */
let size1 = Size.Small;
console.log(size1, num1); //Accessing by assigning enum type to a variable
//functions in ts
//typescript will infer the return type of the function if not specified in below the type of function is number becuase return type is a number
//parameters in ts are also inferred if not specified but parameter type must be specified
function calculateTax(income) {
  return 0;
}
//assign a type to a function it can also be void type if no return type or value is specified
function calculateTax1(income = 2022) {
  return 0; //it throws error is a string or any other is returned
}
calculateTax(10); //if passed more or less ts throws error but in js it does not care even if we pass more or less
//useful config for  functions
// noUnusedLocals: true,noImplicitReturns:true, noUnusedParameters:true
