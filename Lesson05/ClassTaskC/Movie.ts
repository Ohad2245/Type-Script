class Movie{
    // Movie: name + year + director + length
    private _directorName:string;
    private _name:string;
    private _year:number;
    private _length:number;

    public set Name(_name:string){
        this._name = _name;
    }
    public get Name(){
        return this._name;
    }

    public set Year(_year:number){
        this._year = _year;
    }
    public get Year(){
        return this._year;
    }

    public set Length(_length:number){
        if(length >0 && length <= 130)
        this._length = _length;
    }
    public set DirectorName(_directorName:string){
        this._directorName = _directorName;
    }
    public get DirectorName(){
        return this._directorName;
    }

    public constructor(name:string,year:number,length:number,directorName:string){
        this.Name = name;
        this.Year = year;
        this.Length = length;
        this.DirectorName = directorName;
    }

}