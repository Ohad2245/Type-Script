class Cinema{

    private _moviesList:Movie[];
    public get MoviesList(){
        return this._moviesList;
    }
    public set MoviesList(moviesList:Movie[]){
        this._moviesList = moviesList;
    }

    // hallList
    private _hallList:Hall[];
    public get HallList(){
        return this._hallList;
    }
    public set HallList(_hallList:Hall[]){
        this._hallList = _hallList;
    }
    public constructor(){
        this.HallList = new Array<Hall>(8);
        this.MoviesList = new Array<Movie>(80);
    }
    BuyTickets(movieName:String,amount:number):boolean{
        // Cheack where is the movie - witch hall:
        for(let i = 0;i < this.HallList.length;i++){
            if(this.HallsList[i].MyMovie.MovieName == movieName)
        }
    }
}