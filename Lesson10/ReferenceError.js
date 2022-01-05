// The problen - the variable 'num' is not defined. 
try{
    console.log(`num = ${num}`);
}catch(e){
    console.log(e.message);
    console.log(e instanceof ReferenceError);
    console.log(e.name);
}

