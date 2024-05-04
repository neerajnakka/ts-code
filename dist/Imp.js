"use strict";
let speed = null;
let speed2 = speed !== null && speed !== void 0 ? speed : 0;
let phone = document.getElementById('phone');
phone.value = 'hello';
let phone2 = document.getElementById('phone2');
function render(document) {
    if (typeof document === 'string') {
        document.toLowerCase();
    }
    else if (typeof document === 'number') {
        document.valueOf();
    }
    else if (document instanceof HTMLElement) {
        document.appendChild(document.cloneNode());
    }
}
console.log(typeof 10);
function neverReturn() {
    while (true) { }
}
neverReturn();
console.log('hello');
class PersonObj {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    vote(age) {
        if (age >= 18) {
            console.log('Yes');
        }
        else {
            throw new Error('Not eligible');
        }
    }
}
let person = new PersonObj('neeraj', 22);
person.vote(22);
class SeatIndex {
}
let seats = new SeatIndex();
seats.A1 = 'hello';
seats.A2 = 'world';
seats.A3 = 'world';
seats.A4 = 'world';
