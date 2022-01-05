class Pen implements IPaint{
    color: string;
    isWaterBase(): boolean {
        return true || false;
    }

    private _size:number;
    private _year:number;
    private _type:string;

    public get Size(): number {
        return this._size;
    }
    public set Size(size: number) {
        if(size == 0.4 || size == 0.5 || size == 0.7)
            this._size = size;
    }

    public get Year(): number {
        return this._year;
    }
    public set Year(year: number) {
        this._year = year;
    }

    public get Type(): string {
        return this._type;
    }
    public set Type(type: string) {
        if(type == "gel" || type == "ink" || type == "brush")
            this._type = type;
    }
    public constructor(color:string,size: number,year: number,type: string){
        this.color = color;
        this.Size = size;
        this.Year = year;
        this.Type = type;

    }


}

// Math.floor(Math.random()*2)