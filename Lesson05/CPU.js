var CPU = /** @class */ (function () {
    function CPU(SerialNumber, NumOfCores, Company, Price) {
        this.SerialNumber = SerialNumber;
        this.NumOfCores = NumOfCores;
        this.Company = Company;
        this.Price = Price;
    }
    CPU.prototype.toString = function () {
        return "CPU num: " + this.SerialNumber + " from " + this.Company + "\n         has " + this.NumOfCores + "cores,and costs:" + this.Price;
    };
    return CPU;
}());
