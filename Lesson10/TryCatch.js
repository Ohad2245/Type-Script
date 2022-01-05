
let num = null;

console.log('Start program');

// this is a problematic code
try{
    console.log(num.toString());
}catch(error){
    console.log(error);
}


console.log('end program');