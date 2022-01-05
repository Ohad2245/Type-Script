/*
1. Class task enum
Create enum Level with 3 levels: High, Medium, Low

Create enum Category with 5 categories: Fantasy, History, Kids, Drama, Newspaper

Create class Book

Attributes: Name(string), PagesAmount(int), BookCategory(Category), Popularity(Level)
Full constructor
Methods:
ReadBook(): that retuens string with the name of the book, "I read the book .."
toString() that returns full description of attributes.
Create 3 Instances in an array in main program. Fill the data correspondly.

create foreach loop that runs on every element and prints the toString()

create Switch-case loop to check popularity of each book:

If popularity is high- prints "Book is not available today"
If popularity is medium- prints "Please buy another version of this book"
If popularity is low- prints "Enjoy this book"
*/

class Book{
    private _name:string;
    private _pagesAmount:number;
    private _bookCategory:Category;
    private _populariy:Level;

    // Name:
    public get Name():string{
        return this._name;
    }
    public set Name(name:string){
        this._name = name;
    }

    // PagesAmount:
    public get PagesAmount():number{
        return this._pagesAmount;
    }
    public set PagesAmount(pagesAmount:number){
        this._pagesAmount = pagesAmount;
    }

    // BookCategory:
    public get BookCategory():Category{
        return this._bookCategory;
    }
    public set BookCategory(bookCategory:Category){
        this._bookCategory = bookCategory;
    }

    // Populariy:
    public get Populariy():Level{
        return this._populariy;
    }
    public set Populariy(populariy:Level){
        this._populariy = populariy;
    }

    public constructor(name:string,pagesAmount:number,bookCategory:Category,populariy:Level){
        this.Name = name;
        this.PagesAmount = pagesAmount;
        this.BookCategory = bookCategory;
        this.Populariy = populariy;
    }

    toString():string{
        return `Name: ${this.Name}, pagesAmount: ${this.PagesAmount},
        bookCategory:${this.BookCategory} , populariy:${this.Populariy}`;
    }
    
    public ReadBook():string{
        return `i Read the book ${this.Name}`;
    }


}