"use strict";
exports.__esModule = true;
console.log('hello world');
function jklol(str) {
    return str + '...jk lol';
}
console.log(jklol('fuck you mom'));
var num = 86; // any allows us to bypass typescript's rule for types -- try to avoid it though
num = 'fuckyou';
var whatever; // if you don't set a value when declaring a variable its type can be anything
whatever = 'hello world';
whatever = 72;
var dumbass;
dumbass = 'asshole'; // will work
var me = {
    firstName: 'Tristan',
    lastName: 'Alie',
    age: 32,
    favoriteQuote: 'the cake is a lie'
};
console.log(me);
function addAll(a, b, c) {
    var sum = a + b;
    if (c) {
        sum += c;
    }
    return sum;
}
// const retard: Person = { -- won't work duh
//     firstName: 42,
//     lastName: () => this.firstName,
//     age: 'cranberries',
//     favoriteQuote: ['arrow', 20, '3']
// }
function pow(x, y) {
    return Math.pow(x, y).toString();
}
var number = 23;
function changeNumber(newNum) {
    number = newNum;
    console.log(number);
}
var numArr = []; // it's an array that can only be typed with numbers
var personArr = []; // an array of person objects
var checkThisShit = [me, 2.5, 'inches thick']; // this follows the OddlySpecific type
numArr.push(12);
// numArr.push('hello')
// numArr.push(true)
console.log(addAll(1, 2));
function helloWorldXTimes(num) {
    var fullString = '';
    for (var i = 0; i < num; i++) {
        fullString += 'Hello World ';
    }
    return fullString;
}

console.log(helloWorldXTimes(5));
