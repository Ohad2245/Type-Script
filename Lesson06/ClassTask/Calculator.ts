class Calculator{

static Add = (x1:number , x2:number):number => {
    Calculator.numOfCalculetion++;
    return x1 + x2;
}
static Sub = (x1:number , x2:number):number => {
    Calculator.numOfCalculetion++;
    return x1 - x2;
}
static Mul = (x1:number , x2:number):number =>{
    Calculator.numOfCalculetion++;
    return x1 * x2;
} 
static Div = (x1:number , x2:number):number =>{
    Calculator.numOfCalculetion++;
    return x1 / x2;
} 

public static numOfCalculetion = 0;

}

console.log(Calculator.Add(1,2));
console.log(Calculator.Sub(1,2));
console.log(Calculator.Mul(1,2));
console.log(Calculator.Div(1,2));
