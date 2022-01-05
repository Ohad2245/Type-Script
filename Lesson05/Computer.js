// Computer has a CPU - compisition
var Computer = /** @class */ (function () {
    function Computer() {
    }
    // Print all the data to the user
    Computer.prototype.toString = function () {
        return "Computer from " + this.Company + ",costs:" + this.Price + ",\n        and it's CPU " + this.Cpu;
    };
    return Computer;
}());
var c1 = new Computer();
c1.Company = "Dell";
c1.Price = 2500;
c1.Cpu = new CPU(453264, 8, "Intel", 800);
console.log(c1.toString());
