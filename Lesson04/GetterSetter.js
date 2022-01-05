var Movie = /** @class */ (function () {
    function Movie() {
    }
    Object.defineProperty(Movie.prototype, "LengthMinutes", {
        // getter - built in
        get: function () {
            return this._lengthMinutes;
        },
        // setter - built in : with validation:
        set: function (l) {
            if (l > 40 && l < 180)
                this._lengthMinutes = l;
        },
        enumerable: false,
        configurable: true
    });
    return Movie;
}());
var m1 = new Movie();
m1.LengthMinutes = 60;
console.log(m1.LengthMinutes);
