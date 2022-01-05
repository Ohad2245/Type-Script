class ExDate{

    private _day:number;
    private _month:number;
    private _year:number;

    public set Day(d:number){
        if(d >= 1 && d <= 31)
         this._day = d;
    }

    public get Day():number{
        return this._day;
    }

    public set Month(m:number){
        if(m >= 1 && m <= 12)
        this._month;
    }
    
    public get Month():number{
            return this._month;
    }
    public set Year(y:number){
        if(y >= 1998 && y <= 2050)
        this._year;
    }

    public get Year():number{
        return this._year;
    }

    toString():string{
        return `Day: ${this.Day} Month ${this.Month}
         Year ${this.Year}`;
    }
    
   public constructor(day:number,month:number,year?:number ){
        this.Day = day;
        this.Month = month;
        this.Year = year;
   }
    
}