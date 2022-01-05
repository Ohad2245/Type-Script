// matrix - 2 dimentional array - works loke a table
//1. empty martix:
let mat1:number[][];
let mat2:number[][] =[][3];

console.log(mat1); // undefind
console.log(mat2); // undefind

//2. matrix with values:
let mat3:boolean[][] = [
    [true,true],
    [false,false]
];
let fruits:String[][] = [
    ['Apple','Peach','Almond'],
    ['Banana','WaterMelon']
];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[0][2]);
console.log(fruits[1][0]);
console.table(fruits);



