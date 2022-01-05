var Person = /** @class */ (function () {
    function Person(name, age) {
        this.Name = name;
        this.Age = age;
    }
    return Person;
}());
var p1 = new Person();
var p2 = new Person("Alex");
var p3 = new Person("Alex", 45);
var p4 = new Person(undefined, 45);
