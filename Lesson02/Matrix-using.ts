// Empty array:
let matrix1:Array<Array<string>>;

//give size:
let matrix2:Array<Array<string>> = new Array<Array<string>>(5);
matrix2[0] = Array<string>(2);
matrix2[1] = Array<string>('x','y','z');


console.log(matrix2);
console.log(matrix2[0]);
console.log(matrix2[1][1]);
console.table(matrix2);
/*
[ [ <2 empty items> ], [ 'x', 'y', 'z' ], <3 empty items> ]
[ <2 empty items> ]
y
┌─────────┬─────┬─────┬─────┐
│ (index) │  0  │  1  │  2  │
├─────────┼─────┼─────┼─────┤
│    0    │     │     │     │
│    1    │ 'x' │ 'y' │ 'z' │
└─────────┴─────┴─────┴─────┘
*/
