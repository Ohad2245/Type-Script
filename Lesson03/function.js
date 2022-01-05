// Regular function:
function a1() {
    console.log("I am a1");
}
a1();
// 2. Anonymous function:
var a2 = function () {
    console.log("I am a2");
};
a2();
// 3.arrow function:
var a3 = function () {
    console.log("I am a3");
};
a3();
function myFunc1(x1, x2) {
    if (x1 === void 0) { x1 = 5; }
    if (x2 === void 0) { x2 = 7; }
    console.log("x1 = " + x1 + ", x2 = " + x2);
}
myFunc1();
myFunc1(8);
myFunc1(undefined, 8); //משאיר את החלק הערך הראשון ומשני את הימני
myFunc1(8, 8);
function myFunc2(x1, x2) {
    if (x1 === void 0) { x1 = 5; }
    console.log("x1" + x1 + ",x2: " + x2);
}
myFunc2();
myFunc2();
myFunc2();
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}
console.log(isPrime(7));
function isEven(num) {
    for (var i = 0; i < num; i++) {
        if (num % 2 != 0)
            return false;
        else
            return true;
    }
}
console.log(isEven(9));
function isPalindrom(num) {
    num === arr[10];
    for (var i = 0; i < num; i++) {
        if (arr.length[i] = arr.length - 1)
            return true;
        else
            return false;
    }
}
console.log(isEven(948541));
