class Food{

    // private property:
    private _price: number;

    // get - get the property outside the class:
    public get Price():number{
        return this._price;
    }
    // set - set the property outside the class:
    public set Price(price:number){
        this._price = price;
    }

    // ctor:
    public constructor(price:number){
        this.Price = price;
    }
}
