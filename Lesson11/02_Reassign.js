// var - yes
var myVar = 10;
myVar = 'hello';

console.log(`myVar = ${myVar}`); // myVar = hello

// let - yes
let myLet = 10;
myLet = 'hello';

console.log(`myLet = ${myLet}`); // myLet = hello

// const - no
const myConst = 10;
myConst = 'hello';

console.log(`myConst = ${myConst}`); // TypeError: Assignment to constant variable.

