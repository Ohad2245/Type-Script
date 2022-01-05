var Book = /** @class */ (function () {
    function Book() {
    }
    Object.defineProperty(Book.prototype, "NumOfPages", {
        // write - only:
        set: function (n) {
            if (n > 0 && n < 200)
                this._numOfPages = n;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var b1 = new Book();
b1.NumOfPages = 100;
console.log(b1.NumOfPages);
