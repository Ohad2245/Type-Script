let x , y , others;

[x ,y] = [1 , 2];

console.log(`x = ${x} , y = ${y}`); 
// x = 1 , y = 2

[x , y , others] = [1 ,2 ,3 ,4 ,5];
console.log(`x = ${x} , y = ${y}, others = ${others}`); 
// x = 1 , y = 2, others = 3

[x , y , ...others] = [1 ,2 ,3 ,4 ,5];
console.log(`x = ${x} , y = ${y}, others = ${others}`); 
// x = 1 , y = 2, others = 3,4,5
