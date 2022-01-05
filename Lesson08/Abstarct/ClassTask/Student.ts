class Student extends Person{

    private _year:number;
    private _gradeAvg:number;
    private myCourse: Course[];
  
    public get Year():number{
        return this._year;
    }
    public set Year(year:number){
        this._year = year;
    }

    public get GradeAvg():number{
        return this._gradeAvg;
    }
    public set GradeAvg(gradeAvg:number){
        this._gradeAvg = gradeAvg;
    }

    public get myCoure():Course[]{
        return this.myCourse;
    }
    public set myCoure(myCoure:Course[]){
        this.myCourse = myCourse;
    }
    
}