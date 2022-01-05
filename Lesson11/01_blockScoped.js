// block - {}
// The best type for this loop - is 'let'.
// we can also know that from the built-in definition.

const arr =['a','b','c'];

//use var - var is not a block scoped.
// var will be recognized even outside the scope
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log(`i = ${i}`); // i = 3

// use let 
for(let j = 0; j < arr.length; j++){
    console.log(arr[j]);
}

console.log(`j = ${j}`); // ReferenceError: j is not defined


//use const
for(const k = 0; k < arr.length; k++){
    console.log(arr[k]);
}

console.log(`k = ${k}`);
// TypeError: Assignment to constant variable.
// we cannot increment k.(k++).