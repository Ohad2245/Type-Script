// Empty array:
var arr1 = [];
// Generic type 'Array<T>' , Array is an interface
var arr2 = [];
var arr3 = new Array();
var arr4 = new Array();
// 2. DEfine array size:
var arr5 = new Array(4);
var arr6 = new Array(2);
console.log(arr1, arr2, arr3, arr4); //[] [] [] []
console.log(arr5); // [ <4 empty items> ]
console.log(arr6); // [ <4 empty items> ]
console.log(arr5[0]); // undefiend
// 3. Array with intialized values:
var arr7 = [1, 2, 4];
var arr8 = ['a', 'b', 'c'];
var arr9 = new Array(2, 7, 5);
var arr10 = new Array('a', 'b', 'c');
console.log(arr8);
console.log(arr8[2]); //c
console.log(arr8.length); // 3
console.table(arr8);
