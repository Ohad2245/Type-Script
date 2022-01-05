// Interface IRun - has both property & method

// We use the speed property - in the method
interface IRun{
    speed:number;
    startRunning(speed:number):String;
}

// We use favFood as regular property , and method with 2 values

interface IEat{
    favFood:string;
    strtEating(food:string,minutes:number):string;
}

interface ISleep{
    startSleeping(hours:number):string;
}

// Interface that implements other interfces -
// wiil use `extends`
interface IAction extends IEat , ISleep{}

// A class can implements more than 1 interface:
class Person implements IAction,IRun{

    public favFood: string;
    strtEating(food: string, minutes: number): string {
        return `Person eats ${food} , in ${minutes} minutes`;
    }
    startSleeping(hours: number): string {
        return `Person sleeps: ${hours} houres`;
    }
    public constructor(favFood:string,speed:number){
        this.favFood = favFood;
        this.speed = speed;
    }
    // Implements IRun:
    speed:number;
    startRunning(speed: number = this.speed): string {
        return `PErson runs in speed: ${speed} km in hour`;
    }
}

let p1 = new Person('Pizza',20);
console.log(p1.strtEating(p1.favFood,30));
console.log(p1.startSleeping(3.5));

console.log(p1.startRunning());
console.log(p1.startRunning(10));