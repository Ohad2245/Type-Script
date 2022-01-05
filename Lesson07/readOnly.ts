class Cup{

    private _price:number;

    // get - get the property outside the class:
    public get Price():number{
        return this._price;
    }   
}

let c = new Cup();
// Cannot assign to 'Price' because it is a read-only property
// c.Price = 3.6;