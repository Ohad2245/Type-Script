var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.Add = function (x1, x2) { return x1 + x2; };
    Calculator.Sub = function (x1, x2) { return x1 - x2; };
    Calculator.Mul = function (x1, x2) { return x1 * x2; };
    Calculator.Div = function (x1, x2) { return x1 / x2; };
    Calculator.numOfCalculetion = 0;
    return Calculator;
}());
Calculator.Add(1, 2);
Calculator.Sub(1, 2);
Calculator.Mul(1, 2);
Calculator.Div(1, 2);
console.log(Calculator.Add(1, 2));
