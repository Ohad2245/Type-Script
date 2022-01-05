
// throw new Error() we can create our own Errors.
function validAge(age){
    if(age >=0 && age <= 120) console.log(`Age = : ${age}`);
    else throw new Error('Age must be between 0 to 120');
}

console.log("Srart program..");
try{
    validAge(-4);
}catch(e){
    console.log(e);
    console.log(e.message);
}

console.log("End program...");