class Movie{

    // private property:
    private _lengthMinutes:number; // undefined

    // setter - built in : with validation:
    public set LengthMinutes(l:number){
        if(l > 40 && l < 180)
            this._lengthMinutes = l;
    }

    // getter - built in
    public get LengthMinutes():number{
        return this._lengthMinutes;
    }
}

let m1 = new Movie();

m1.LengthMinutes = 60;
console.log(m1.LengthMinutes);