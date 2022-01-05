let array1:(number)[] = [10];
let array2:(number)[] = [10];

array1 =[1,2,3,4,5,6,7,8,9,10];
array2 =[11,12,13,14,15,16,17,18,19,20];


function sum(array1:number[],array2:number[]):number[]{
let array3 :number[] = new Array<number>(10);
for(let i = 0;i < 10; i++){
    array3[i] = array1[i] + array2[i];
}
return array3;
}
console.log(sum(array1,array2));

let array4:(number)[] = [14];
array4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let odd:(number)[]  = [];
let even:(number)[] = [];

let j = 0 , k = 0;
for(let i = 0;i < array4.length;i++){
    if(i%2 == 0) odd[j++] = array4[i];
    else even[k++] = array4[i];
}
console.log(even);
console.log(odd);

let array8:Array<string> = ["J","b","C","d","E","f","Z"];
let array9:Array<string> = [];
let array10:Array<string> = [];

for(let i = 0;i < array8.length;i++){
    if(array8[i].charAt(0) >='A' && array8[i].charAt(0) <= 'Z'){
        array9[i] = array8[i];
    }
    else{
        array10[i] = array8[i];
    }
    }
    console.log("Array 9 = " + array9);
    console.log("Array 10 = " + array10);


