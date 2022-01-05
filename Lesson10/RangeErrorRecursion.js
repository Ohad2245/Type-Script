// recursive function have limited rounds...
// we do not want cause `stack overflow`. 13,000 max..
function myFunc(num){
    if(num > 10000) return;
    myFunc(num + 1);
}

// RangeError : Maximun call stack size exceeded
console.log(myFunc());

