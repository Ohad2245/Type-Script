class Car{
    // Properties:
    public Name:string;
    public Year:number;
}

// 3 instances of class 'Car':
let c1 = new Car();
c1.Name = 'Toyoya';
c1.Year = 2010;

let c2 = new Car();
c2.Name = 'Ferrari';
c2.Year = 2020;


let c3 = new Car();
c3.Name = 'Honda';
c3.Year = 1999;

// Array of objects from class 'Car':
let myCars:Car[] = [c1,c2,c3];

// Loop over the arrsy:
for(const car of myCars){
    console.log(`Car: ${car.Name} , year ${car.Year}`);
}
/** 
Car: Toyoya , year 2010
Car: Ferrari , year 2020
Car: Honda , year 1999 
*/