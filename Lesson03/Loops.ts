// We have 6 loops in TS :
let letters:string[] = ["Aa","Bb","Cc","Dd"];

// 1. while
console.log("While loop");
let counter = 0;
while(counter > letters.length){
    console.log(letters[counter]);
    counter++;
}

// 2. do - while
console.log(" Do-While loop");
do{
    console.log(letters[counter]);
    counter++;
}while(counter > letters.length);

// 3. for
console.log("For loop");
for(let i = 0;i < letters.length;i++){
    console.log(letters[i]);
}

// 4. for - in - go over index
console.log("For-In loop");
for(const item in letters){
    console.log(item);
}

// 5. for - of go over value
console.log("For-Of loop");
for(const item of letters){
    console.log(item);
}

// 6. forEach
console.log("ForEach loop");
letters.forEach(item=>console.log(item));
/*
A. Basic array
Use the following code - that creates random number between 0-300:
var num: number = Math.floor(Math.random() * 300);
Create an array (type: number) with 10 cells

Insert to each cell random number between 0-300.

Create function for each part, that gets the array and returns the requested value:

the array
the number's sum
the number's average
the biggest number
the smallest number
the index of the biggest number
the index of the smallest number
the sum of the even numbers
the sum of the odd numbers
the amount of numbers that are above 150.

*/
var num:number = Math.floor(Math.random()*300);
let arr:number[] = new Array<number>(10);
for(let i = 0; i < arr.length;i++){
    var num:number = Math.floor(Math.random()*300);

    arr[i] = num;
}
console.log(arr[5]);

let func1 = () =>{
    for(const item of arr){
        console.log(item)
    }
    console.log(func1());
}
let func2 = () => {
    let sum:number = 0;
    for(let i = 0;i < arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
console.log(func2());

let func3 = () =>{
    let avg:number = 0;
    for(let i = 0;i < arr.length;i++){
        avg = func2()/10;
    }
    return avg;
}
console.log(func3());

let func4 = () =>{
    let max:number = arr[0];
    for(let i = 1; i < arr.length;i++){
        if(max < arr[i]){
            max = arr[i];
    }
    return max;
}
}
console.log(func4());

let func5 = () =>{
    let min:number = arr[0];
    for(let i = 1 ;i< arr.length;i++){
        if(min > arr[i])
        min = arr[i];
    }
    return min;
}
console.log(func5());




























