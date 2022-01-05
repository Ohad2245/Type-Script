class Pencil implements IPaint{

    color: string;
    public isWaterBase(): boolean {
        return false;
    }

    private _company: string;
    private _size:number;
    private _hasEraser:boolean;

    public get Company(): string {
        return this._company;
    }
    public set Company(comapny: string) {
        this._company = comapny;
    }

    public get Size(): number {
            return this._size;
    }
    public set Size(size: number) {
        if(this._size == 1 || this._size == 2 || this._size == 3)
            this._size = size;
    }

    public get HasEraser():boolean{
        return this._hasEraser;
    }
    public set HasEraser(hasEraser:boolean){
        this._hasEraser = hasEraser;
    }
    
public constructor(color:string,comapny: string,size: number,hasEraser:boolean){
    this.color = color;
    this.Company = comapny;
    this.Size = size;
    this.HasEraser = hasEraser;

}

}