class OilPaints implements IPaint{
    color: string;
    isWaterBase(): boolean {
        return true || false;
    }

    private _price:number;
    private _quality:string;

    public get Price(): number {
        return this._price;
    }
    public set Price(price: number) {
        this._price = price;
    }

    public get Quality(): string {
        return this._quality;
    }
    public set Quality(quality: string) {
        if(quality == "low" || quality == "medium" ||quality == "high")
            this._quality = quality;
    }

    public constructor(color:string,price: number,quality: string){
        this.color = color;
        this.Price = price;
        this.Quality = quality;
        
    }
}