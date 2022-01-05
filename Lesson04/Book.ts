class Book{

    //private property:
    private _numOfPages:number; //undefined

    // write - only:
    public set NumOfPages(n:number){
        if(n > 0 && n < 200)
            this._numOfPages = n;
    }

    // private property:
    private _author:string = "Jhon B";

    // read - only:
    public get Author(){
        return this._author;
    }
}

let b1 = new Book();
b1.NumOfPages = 100;
// Cannot accses the property - it has no getter:
// console.log(b1.NumOfPages); // undefined


// Cannot assign to 'Author' because it is a read-only property.ts(2540)
// b1.Author = 'Alex';

console.log(b1.Author);