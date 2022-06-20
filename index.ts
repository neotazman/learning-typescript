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

function addAll(a: number, b: number, c?: number): number { // "?" denotes an optional parameter
    let sum = a + b 
    if(c) {
        sum += c
    }
    return sum
}

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

const numArr: number[] = [] // it's an array that can only be typed with numbers
const personArr: Person[] = [] // an array of person objects
type OddlySpecific = [Person, number, string?] // optional args/values must be after required 
const checkThisShit: OddlySpecific = [me, 2.5, 'inches thick'] // this follows the OddlySpecific type

numArr.push(12)
// numArr.push('hello')
// numArr.push(true)
console.log(addAll(1, 2))

function helloWorldXTimes (num: number): string {
    let fullString = ''
    for (let i = 0; i < num; i++) {
        fullString+= 'Hello World '
    }
    return fullString
}

console.log(helloWorldXTimes(5))


const typescriptMatrix = (x: number[], y: number[]): any => {
        
}