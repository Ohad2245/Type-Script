// Regular function:
function a1(){
    console.log("I am a1");
}
a1();

// 2. Anonymous function:
let a2 = function(){
    console.log("I am a2");
}
a2();

// 3.arrow function:
let a3 = () =>{
    console.log("I am a3");
}
a3();

function myFunc1(x1:number = 5, x2:number = 7):void{
    console.log(`x1 = ${x1}, x2 = ${x2}`);
}

myFunc1();
myFunc1(8);
myFunc1(undefined,8); //משאיר את החלק הערך הראשון ומשני את הימני
myFunc1(8,8);

function myFunc2(x1:number = 5, x2?:number):void{
    console.log(`x1${x1},x2: ${x2}`);
}

myFunc2();
myFunc2();
myFunc2();

function isPrime(num) {
        for(let i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
      }
  console.log(isPrime(7));

function isEven(num){
    for(let i = 0;i < num;i++){
        if(num % 2!=0)  return false;
        else return true;
    }
}
console.log(isEven(9));

function isPalindrom(num){
    num === Array[10];
    for(let i = 0;i < num;i++){
        if(Array.length[i] = Array.length-1)
        return true;
    else return false;
    }
}











