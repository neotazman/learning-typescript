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
// const retard: Person = { -- won't work duh
//     firstName: 42,
//     lastName: () => this.firstName,
//     age: 'cranberries',
//     favoriteQuote: ['arrow', 20, '3']
// }
