"use strict";
exports.__esModule = true;
console.log('hello world');
function jklol(str) {
    return str + '...jk lol';
}
console.log(jklol('fuck you mom'));
var num = 86; // any allows us to bypass typescript's rule for types -- try to avoid it though
num = 'fuckyou';
var whatever; // if you don't set a value when declaring a variable, its type can be anything
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
var number = 23; // when you assign a value to a let variable, typescript automatically saves the value's type to the variable
// number = 'nevermind' // won't work ^^^
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
// console.log(helloWorldXTimes(5))
var otherGuy = {
    name: 'whatever',
    age: 99
};
var thisGuy = {
    name: 'irrelevant',
    age: 50
};
var thirdGuy = {
    name: 'bob',
    age: 22,
    hobbies: ['D&D', 'Warhammer']
};
var activities;
activities = ['Jump', "Action", /*45*/]; // if I want to put a number into an array of strings, i would have to declare the return value as any[] -- again, any might defeat the purpose of using typescript
// console.log(otherGuy.name) // because I declared that the otherGuy simply returns an object, it doesn't recognize the property of the object...
console.log(thirdGuy.name);
for (var _i = 0, _a = thirdGuy.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // typescript doesn't complain about string methods in this loop because it knows that the hobbies are all strings
}
