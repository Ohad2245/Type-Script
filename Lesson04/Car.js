var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
// 3 instances of class 'Car':
var c1 = new Car();
c1.Name = 'Toyoya';
c1.Year = 2010;
var c2 = new Car();
c2.Name = 'Ferrari';
c2.Year = 2020;
var c3 = new Car();
c3.Name = 'Honda';
c3.Year = 1999;
// Array of objects from class 'Car':
var myCars = [c1, c2, c3];
// Loop over the arrsy:
for (var _i = 0, myCars_1 = myCars; _i < myCars_1.length; _i++) {
    var car = myCars_1[_i];
    console.log("Car: " + car.Name + " , year " + car.Year);
}
/**
Car: Toyoya , year 2010
Car: Ferrari , year 2020
Car: Honda , year 1999
*/ 
