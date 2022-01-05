// scope = {}

{
    let myLet = 10;
}

console.log(myLet); // ReferenceError: myLet is not defined

if(true){
    var myVar = 10;
    let myLet = 20;
    const myConst = 30;
}

console.log(`myVar = ${myVar} , myLet = ${myLet}, myConst = ${myConst}`);