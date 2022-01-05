interface IAction{
    MoveLeft(steps:number):string;
    MoveRigth(steps:number):string;
}

// Both Car and Animal classes implements the same interface - IAction
class Car implements IAction{
    MoveLeft(steps: number): string {
        return `The car drives ${steps} km to the left`;
    }
    MoveRigth(steps: number): string {
        return `The car drives ${steps} km to the rigth`;
    }
}

class Animal implements IAction{
    MoveLeft(steps: number): string {
        return `The animal moved ${steps} steps to the left`;
    }
    MoveRigth(steps: number): string {
        return `The animal moved ${steps} steps to the rigth`;
    }

}

let myCar = new Car();
console.log(myCar.MoveLeft(12));
console.log(myCar.MoveRigth(45));

let myAnimal = new Animal();
console.log(myAnimal.MoveLeft(30));
console.log(myAnimal.MoveRigth(30));