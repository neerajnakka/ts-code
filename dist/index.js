"use strict";
let x = 10;
let y = 'hello';
let z = false;
let z1 = null;
let z2 = 5;
z2 = 'string';
z2 = true;
let numArr = [1, 2, 3];
let booArr = [true, false];
let strArr = ['hello', 'world'];
let anyArr = [];
anyArr.push(1);
anyArr.push('hello');
let numStr = [1, 'hello'];
let numStr1 = ['hello', 1, true];
let numStr3 = ['hello', 1];
let nums = numStr3[0];
let numn = numStr3[1];
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
console.log(0, Size.Small);
let num1 = 0;
let size1 = Size.Small;
console.log(size1, num1);
function calculateTax(income) {
    return 0;
}
function calculateTax1(income = 2022) {
    return 0;
}
calculateTax(10);
let employee = { id: 1, name: 'neeraj' };
employee.id = 2;
let employee1 = {
    id: 1,
    name: 'neeraj',
};
let employee2 = {
    id: 1,
    name: 'neeraj',
    retire: (date) => {
        console.log(date);
    },
};
