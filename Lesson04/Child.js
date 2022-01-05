var Child = /** @class */ (function () {
    function Child() {
    }
    // setter function:
    // we can add to setter function validation check:
    Child.prototype.setAge = function (age) {
        if (age >= 0 && age <= 120)
            this._age = age;
        // מאפשר להכניס נתונים
    };
    // getter function:
    Child.prototype.getAge = function () {
        return this._age;
        // מאפשר להוציא נתונים מחוץ לקלאס
    };
    return Child;
}());
var child1 = new Child();
child1.setAge(1);
console.log(child1.getAge()); // return from getAge() // 1
