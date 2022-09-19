"use strict";
exports.__esModule = true;
// console.log('hello world')
function jklol(str) {
    return str + '...jk lol';
}
// console.log(jklol('fuck you mom'))
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
// console.log(me)
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
function screwUp(word) {
    return;
}
var numArr = []; // it's an array that can only be typed with numbers
var personArr = []; // an array of person objects
var checkThisShit = [me, 2.5, 'inches thick']; // this follows the OddlySpecific type
numArr.push(12);
// numArr.push('hello')
// numArr.push(true)
// console.log(addAll(1, 2))
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
// console.log(thirdGuy.name)
for (var _i = 0, _a = thirdGuy.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // typescript doesn't complain about string methods in this loop because it knows that the hobbies are all strings
}
var newTuple = [5, 'strips of bacon']; // can create arrays with specific values, btw a tuple is an array with a set amount of indices and set types for those indices
// newTuple[1] = 5 the second index has to be a string
newTuple.push('pancakes'); // push can add indices to tuples
//newTuple = [10, 'pancakes', bacon] // but you can't set the tuple to be more values that originally designated
var meals;
(function (meals) {
    meals[meals["BREAKFAST"] = 0] = "BREAKFAST";
    meals[meals["LUNCH"] = 1] = "LUNCH";
    meals[meals["DINNER"] = 2] = "DINNER";
})(meals || (meals = {})); // not in javascript but in many other languages -- creates options as human readable names instead of just doing "1, 2, 3" or something -- all caps is sometimes a naming convention, but not always -- can also set a specific value to each name if you want to
function eat(meal) {
    if (meal === meals.BREAKFAST)
        return 'scrambled eggs';
    else if (meal === meals.LUNCH)
        return 'leftovers';
    else if (meal === meals.DINNER)
        return 'pork and beans';
}
// console.log(eat(meals.BREAKFAST))
function combine(x, y) {
    var result;
    if (typeof x === 'number' && typeof y === 'number') {
        result = x + y;
    }
    else {
        result = x.toString() + y.toString();
    }
    return result;
}
var doSomething; // the Function type must be capitalized to work
var doSomethingSpecific; // set the return value to be a function that takes two numbers and returns a number. "() => someValueType" is how to declare a specific type of function to be returned. if the function always returns a number, you could just set the expected return value to be number and it will work, however if you set a number that isn't created by a function as the return value it would not work with doSomethingSpecific
function nullCb(a, b, cb) {
    var result = a + b;
    cb(result);
}
function consoleResult(num) {
    console.log(num);
    return num;
}
nullCb(25, 3, consoleResult); // the cb in nullCb should return void, but consoleResult should return a number. nullCb is saying that no matter what cb returns it will ignore the return value; so cb still returns void even though the function passed in returns something
var wtf; // unknown is if the program doesn't yet know what the return type will be
wtf = 50;
wtf = function (num) { return num; };
wtf = 'fuckyou';
var name;
// name = wtf // "unknown" is different from "any" in that
