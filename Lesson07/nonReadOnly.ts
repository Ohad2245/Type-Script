class Bottle{
    private _price:number;

    // get - get the property outside the class:
    public get Price():number{
        return this._price;
    }
    // set - set the property outside the class:
    public set Price(price:number){
        this._price = price;
    }
}

let b= new Bottle();
// price is not readonly:
b.Price = 3.6;