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
let numuStr = ['hello', 1, 'no', 2];
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
let arrFun = (x, y) => {
    return x + y;
};
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
let employee3 = { id: 1, name: 'neeraj', retire: (date) => { } };
let id5 = 1;
id5 = 'hello';
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { },
};
let company = { id: 1, name: 'neeraj', project: 'typescript' };
let l1 = 50;
let l2 = 100;
let l3 = 'neeraj';
let personObj = { name: 'neeraj', age: 22 };
let companyInt = {
    name: 'neeraj',
    age: 22,
    project: 'typescript',
    salary: 20000,
};
