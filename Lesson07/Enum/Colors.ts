enum Color{
    RED,
    BLUE,
    GREEN
}

// 3 ways to access enum variables:
console.log(Color[0]); // RED

console.log(Color.GREEN); // 2

// Color[1] = blue
console.log(Color[Color.BLUE]); // BLUE


let co1:Color = 2;
console.log(co1); // 2
console.log(Color[co1]); // GREEN