class Address {
    constructor(houseNum, street, country, city) {
        this.HouseNum = houseNum;
        this.Street = street;
        this.City = city;
        this.Country = country;
    }
    set HouseNum(_houseNum) {
        if (_houseNum >= 0)
            this._houseNum = _houseNum;
    }
    get HouseNum() {
        return this._houseNum;
    }
    set Street(_street) {
        this._street = this._street;
    }
    get Street() {
        return this._street;
    }
    set City(_city) {
        this._city = this._city;
    }
    get City() {
        return this._city;
    }
    set Country(_country) {
        if (this.Country == 'Israel' || this.Country == 'France' || this.Country == 'USA')
            this._country = this._country;
    }
    get Country() {
        return this._country;
    }
}
class Birthday {
    // ctor:
    constructor(day, month, year) {
        this.Day = day;
        this.Month = month;
        this.Year = year;
    }
    set Day(day) {
        if (day > 0 && day <= 31)
            this._day = day;
    }
    get Day() {
        return this._day;
    }
    set Month(month) {
        if (month > 0 && month <= 12)
            this._month = month;
    }
    get Month() {
        return this._month;
    }
    set Year(year) {
        if (year > 1000 && year <= 9999)
            this._year = year;
    }
    get Year() {
        return this._year;
    }
    toString() {
        return `${this.Day}/${this.Month}/${this.Year}`;
    }
}
class Person {
    constructor(name, myAddress, myProfession, myBirthday) {
        this.Name = name;
        this.MyAddress = myAddress;
        this.MyProfession = myProfession;
        this.MyBirthday = myBirthday;
    }
    toString() {
        return `${this.Name}: \nAddress: ${this.MyAddress}\nProfession:${this.MyProfession}\nBirthdate: ${this.MyBirthday}`;
    }
}
class Profession {
    // ctor:
    constructor(name, hours, salary) {
        this.Name = name;
        this.HoursPerMonth = hours;
        this.Salary = salary;
    }
    set Name(name) {
        this._name = name;
    }
    get Name() {
        return this._name;
    }
    set HoursPerMonth(hoursPerMonth) {
        if (hoursPerMonth >= 0 && hoursPerMonth <= 80)
            this._hoursPerMonth = hoursPerMonth;
    }
    get HoursPerMonth() {
        return this._hoursPerMonth;
    }
    set Salary(salary) {
        if (salary >= 0 && salary <= 100000)
            this._salary = salary;
    }
    get Salary() {
        return this._salary;
    }
    toString() {
        return `Name: ${this.Name}, hours: ${this.HoursPerMonth}, salary: ${this.Salary}`;
    }
}
let myPepole = [
    new Person("Alex", new Address(1, "x", "Ariel", "Israel"), new Profession("Teacher", 40, 100000), new Birthday(2, 5, 1990)),
    new Person("Bracha", new Address(1, "x", "Ariel", "Israel"), new Profession("Teacher", 40, 100000), new Birthday(26, 9, 1994))
];
for (const person of myPepole) {
    console.log(person.toString());
}
//# sourceMappingURL=out.js.map