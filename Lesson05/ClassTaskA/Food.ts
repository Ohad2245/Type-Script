class Food{

    private _foodName:string;
    private _lastDate:ExDate;

    public set FoodName(f:string){
        this._foodName = f;
    }
    public get FoodName():string{
        return this._foodName;
    }

    public set LastDAte(l:ExDate){
        this._lastDate = l;
    }
    public get LastDAte():ExDate{
        return this._lastDate;
    }


    toString():string{
        return `Food Name ${this.FoodName} Last Date ${this.LastDAte}`;
    }

    public constructor(foodName:string,lastDate:ExDate){
        this.FoodName = foodName;
        this.LastDAte = lastDate;
    }
}