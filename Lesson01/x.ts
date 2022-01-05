// typeScripts has 4 basic types: number, string,boolean , any
// number:
// 1. if we add the value in the intializion line - this is the type.
let x1 = 5;
x1 = 6;

// 2. any empty
let x2:any;
x2 = 5;
x2 = "Ohad";

// 3.
let x3:string;
x3 = "hello";
// x3 = 5; impossible

// Functions
// basic :
function func1(){};
function func2(x){return x};
function func3(x){console.log(`x = ${x}`)};
function func4(){return true};
function func5(num){return num};

//add types:
// 1. parameters:
function func6(x:number){console.log(`x = ${x}`)};
function func7(): string{ return 'hello'};

// 3. full example:
function myDetails(name:string,age:number):string{
    let str:string = `my name is: ${name},and I am ${age} years old`
    return str;
};
