class House{

    private _numOfRooms:number;
    private _country:string = "Israel";
    private _numOfFloors:number;
    private _isForSale:boolean;
    private _price:number;


    public set NumOfRooms(r:number){
        if(r > 1 && r < 10)
             this._numOfRooms = r;
    }

    public get NumOfRooms():number{
        return this._numOfRooms;
    }
    
    public get Country():string{
        return this._country;
    }

    public set NumOfFloors(f:number){
        if(f > 0 && f <= 4)
            this._numOfFloors = f;
    }

    public get NumOfFloors():number{
        return this._numOfFloors;
    }

    public set IsForSale(s:boolean){
        this.IsForSale  = s;
    }

    public get IsForSale():boolean{
        return this._isForSale;
    }

    public set Price(p:number){
        if(p > 300000 && p <= 3000000)
            this._price = p;
    }
    public get Price():number{
        return this._price;
    }

    public constructor(_numOfRooms?:number,_numOfFloors?:number,
        _isForSale?:boolean,_price?:number ){
        this.NumOfRooms = _numOfRooms;
        this.NumOfFloors = _numOfFloors;
        this.IsForSale = _isForSale;
        this.Price = _price;
    }
    public toString():void{
         return 
         console.log(`NumOfRooms ${this.NumOfRooms}, NumOfFloors ${this.NumOfFloors}
        Country ${this.Country} ,IsForSale ${this.IsForSale} , Price ${this.Price}`)
    }
}
let array = new Array<House>(5);

