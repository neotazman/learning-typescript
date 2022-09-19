import * as _ from 'lodash'; //
// console.log('hello world')

function jklol (str: string): string {
    return str + '...jk lol'
}



// console.log(jklol('fuck you mom'))

let num: any = 86; // any allows us to bypass typescript's rule for types -- try to avoid it though


num = 'fuckyou';

let whatever; // if you don't set a value when declaring a variable, its type can be anything
whatever = 'hello world'
whatever = 72

type Dumbass = 'asshole' | 'jerk' // Dumbass can only be set to those values -- useful when multiple inputs should only take certain arguments; in js, functions might need complex if statements to reject inputs that don't work

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

// console.log(me)

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

let number = 23 // when you assign a value to a let variable, typescript automatically saves the value's type to the variable
// number = 'nevermind' // won't work ^^^

function changeNumber (newNum: number) : void { // void is if you don't return anything
    number = newNum
    console.log(number)
}
function screwUp (word: object) : undefined { // undefined is a type that can be expected as a return value. i currently don't know how this would be useful
    return
}

const numArr: number[] = [] // it's an array that can only be typed with numbers
const personArr: Person[] = [] // an array of person objects
type OddlySpecific = [Person, number, string?] // optional args/values must be after required, "?" means optional
const checkThisShit: OddlySpecific = [me, 2.5, 'inches thick'] // this follows the OddlySpecific type

numArr.push(12)
// numArr.push('hello')
// numArr.push(true)
// console.log(addAll(1, 2))

function helloWorldXTimes (num: number): string {
    let fullString = ''
    for (let i = 0; i < num; i++) {
        fullString+= 'Hello World '
    }
    return fullString
}

// console.log(helloWorldXTimes(5))

const otherGuy: object = { // you can declare that the return value will be an object 
    name: 'whatever',
    age: 99,
}
const thisGuy: {// you can also declare a specific kind of object to be returned
    name: string; // when declaring types for object properties, use semicolons ";" instead of commas ","
    age: number;
} = { // declare an empty object "{}" as the return value, it will do the same as the otherGuy
    name: 'irrelevant',
    age: 50,
}
const thirdGuy = { // it's best practice to let typescript infer the object type
    name: 'bob',
    age: 22,
    hobbies: ['D&D', 'Warhammer']
}

let activities : string[];
activities = ['Jump', "Action", /*45*/] // if I want to put a number into an array of strings, i would have to declare the return value as any[] -- again, any might defeat the purpose of using typescript

// console.log(otherGuy.name) // because I declared that the otherGuy simply returns an object, it doesn't recognize the property of the object...
// console.log(thirdGuy.name)

for(let hobby of thirdGuy.hobbies) {
    console.log(hobby.toUpperCase()) // typescript doesn't complain about string methods in this loop because it knows that the hobbies are all strings
}

let newTuple : [number, string] = [5, 'strips of bacon'] // can create arrays with specific values, btw a tuple is an array with a set amount of indices and set types for those indices
// newTuple[1] = 5 the second index has to be a string
newTuple.push('pancakes') // push can add indices to tuples
//newTuple = [10, 'pancakes', bacon] // but you can't set the tuple to be more values that originally designated

enum meals { BREAKFAST, LUNCH, DINNER } // not in javascript but in many other languages -- creates options as human readable names instead of just doing "1, 2, 3" or something -- all caps is sometimes a naming convention, but not always -- can also set a specific value to each name if you want to

function eat (meal: meals): string {
    if(meal === meals.BREAKFAST) return 'scrambled eggs'
    else if(meal === meals.LUNCH) return 'leftovers'
    else if(meal === meals.DINNER) return 'pork and beans'
}

// console.log(eat(meals.BREAKFAST))

function combine(x: string | number, y: string | number): string | number { // "|" is a union, which means more than one type can be expected -- can do more than two with additional unions e.g. "string | number | boolean" etc.
    let result: string | number 
    if(typeof x === 'number' && typeof y === 'number') {
        result = x + y
    } else {
        result = x.toString() + y.toString()
    }
    return result
}

let doSomething : Function // the Function type must be capitalized to work
let doSomethingSpecific : (a: number, b: number) => number // set the return value to be a function that takes two numbers and returns a number. "() => someValueType" is how to declare a specific type of function to be returned. if the function always returns a number, you could just set the expected return value to be number and it will work, however if you set a number that isn't created by a function as the return value it would not work with doSomethingSpecific
function nullCb(a: number, b: number, cb: (num: number) => void) {
    let result = a + b
    cb(result)
}
function consoleResult(num: number) {
    console.log(num)
    return num
}
nullCb(25, 3, consoleResult) // the cb in nullCb should return void, but consoleResult should return a number. nullCb is saying that no matter what cb returns it will ignore the return value; so cb still returns void even though the function passed in returns something

let wtf : unknown // unknown is if the program doesn't yet know what the return type will be
wtf = 50
wtf = (num) => num
wtf = 'fuckyou'
let name : string
// name = wtf // "unknown" is different from "any" in that
