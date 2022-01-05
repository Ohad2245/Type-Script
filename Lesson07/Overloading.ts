/**
 :העמסה 
 שיש לנו יותר מפונקצייה אחת מאותו שם במחלקה אחת
 

 */

class Calculator{

    public Add(x:number ,y:number  ,z?:number ){
        (z == undefined) ? console.log(`${x} + ${y} = ${x + y}`):
        console.log(`${x} + ${y} + ${z} = ${x + y + z}`);
    }

   public Add2(x:(number | string) , y:(number | string)){
        if(typeof x == 'number' && typeof y == 'number')
            console.log(`${x} + ${y} = ${x + y}`)
        else console.log(`${x} + ${y} = ${x} ${y}`)
   }
}

let calc = new Calculator();

// overloading by number of parameters:
calc.Add(2 ,3);
calc.Add(1,2 ,3);

//overloading by parameters type:
calc.Add2(1,2);
calc.Add2('Hello','World');
calc.Add2('Hello',2);