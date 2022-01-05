class Hall{
    private _myMovie:Movie;
    public get MyMovie(){
        return this._myMovie;
    }
    public set MyMovie(movie:Movie){
        this._myMovie = movie;
    }

    public Seats:boolean[][] = new Array<Array<boolean>>(8);
    public constructor(movie:Movie){
        this.MyMovie = movie;

        //init the seats:
        
    }
}