class Address{
    // houseNum:
    private _houseNum: number;
    public set HouseNum(_houseNum:number){
        if(_houseNum >=0)
        this._houseNum = _houseNum;
    }
    public get HouseNum(){
        return this._houseNum;
    }


    private _street:string;
    public set Street(_street:string){
        this._street = this._street;
    }
    public get Street(){
        return this._street;
    }
    
    private _city:string;
    public set City(_city:string){
        this._city = this._city;
    }
    public get City(){
        return this._city;
    }


    private _country:string;
    public set Country(_country:string){
        if(this.Country == 'Israel' ||this.Country == 'France'||this.Country == 'USA')
        this._country = this._country;
    }
    public get Country(){
        return this._country;
    }

    public constructor(houseNum:number,street:string,country:string,city:string){
        this.HouseNum = houseNum;
        this.Street = street;
        this.City = city;
        this.Country = country;
    }
}