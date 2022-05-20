import * as _ from 'lodash'; //
console.log('hello world')

function jklol (str) {
    return str + '...jk lol'
}



console.log(jklol('fuck you mom'))

let num: any = 86; // any allows us to bypass typescript's rule for types -- try to avoid it though


num = 'fuckyou';

let whatever; // if you don't set a value when declaring a variable its type can be anything
whatever = 'hello world'
whatever = 72

type Dumbass = 'asshole' | 'jerk' // D  umbass can only be set to those values 

let dumbass: Dumbass ;
dumbass = 'asshole' // will work
//dumbass = 'fun' -- won't work

interface Person {
    firstName: string,
    lastName: string,
    age: number,
    favoriteQuote: string,
    [key: string]: any // can add additional properties -- this key has to be a string, but the value can be anything
}

const me: Person = {
    firstName: 'Tristan',
    lastName: 'Alie',
    age: 32,
    favoriteQuote: 'the cake is a lie'
}

console.log(me)

// const retard: Person = { -- won't work duh
//     firstName: 42,
//     lastName: () => this.firstName,
//     age: 'cranberries',
//     favoriteQuote: ['arrow', 20, '3']
// }

function pow(x: number, y: number) : string { // you can declare types of the parameters as well as the return values
    return Math.pow(x, y).toString()
}

let number = 23

function changeNumber (newNum: number) : void { // void is if you don't return anything
    number = newNum
    console.log(number)
}

