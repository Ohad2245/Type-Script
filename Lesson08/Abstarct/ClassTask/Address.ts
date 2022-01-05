class Address {
   
    private _country:string;
    private _city:string;
    private _houseNum:number; 
    
    // Country:
    public get Country():string{
        return this._country;
    }
    public set Country(country:string){
        this._country = country;
    }

    // City:
    public get City():string{
        return this._city;
    }
    public set City(city:string){
            this._city = city;
    }

    // HouseNum
    public get HouseNum():number{
        return this._houseNum;
    }
    public set HouseNum(houseNum:number){
        this._houseNum = houseNum;
    }

    constructor(country:string,city:string,houseNum:number){
        this.Country = country;
        this.City = city;
        this.HouseNum = houseNum;
        }
        
    toString():string{
        return ``;
    }
}   

