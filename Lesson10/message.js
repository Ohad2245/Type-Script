
let num = null;

console.log('Start program');

// this is a problematic code
try{
    console.log(num.toString());
}catch(e){
    console.log(e.message); //Cannot read property 'toString' of null
}

// notice that the program will continue running
console.log('end program');