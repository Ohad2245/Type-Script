// Empty array:
let arr1:number[] = [];
// Generic type 'Array<T>' , Array is an interface
let arr2:Array<string> = [];
let arr3:number[] = new Array<number>();
let arr4:Array<string> = new Array<string>();

// 2. DEfine array size:
let arr5:number[] = new Array<number>(4);
let arr6:Array<string> = new Array<string>(2);

console.log(arr1,arr2,arr3,arr4); //[] [] [] []
console.log(arr5); // [ <4 empty items> ]
console.log(arr6); // [ <4 empty items> ]
console.log(arr5[0]);// undefiend

// 3. Array with intialized values:
let arr7:number[] = [1 ,2 ,4];
let arr8:Array<string> = ['a','b','c'];
let arr9:number[] = new Array<number>(2 ,7 ,5);
let arr10:Array<string> = new Array<string>('a' , 'b' ,'c');

console.log(arr8);
console.log(arr8[2]); //c
console.log(arr8.length); // 3
console.table(arr8);
