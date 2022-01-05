class Birthday{

    // _day:
    private _day:number;
    public set Day(day:number){
        if(day > 0 &&  day <= 31) 
            this._day = day;
    }
    public get Day(){
        return this._day;
    }

     // _month:
     private _month:number;
     public set Month(month:number){
         if(month > 0 &&  month <= 12) 
             this._month = month;
     }
     public get Month(){
         return this._month;
     }

     // _year:
     private _year:number;
     public set Year(year:number){
         if(year > 1000 && year <= 9999) 
             this._year = year;
     }
     public get Year(){
         return this._year;
     }

     // ctor:
     public constructor(day:number, month:number, year:number){
       this.Day = day;
       this.Month = month;
       this.Year = year;
    }

    toString():string{
        return `${this.Day}/${this.Month}/${this.Year}`;
    }
}