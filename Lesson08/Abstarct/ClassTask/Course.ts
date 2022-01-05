class Course{
    private _name:string;
    private _semester:string;
    private _classNumber:string;
    private _numOfStudents:number;

    // Name
    public get Name():string{
        return this._name;
    }
    public set Name(name:string){
            this._name = name;
    }

    //Semester
    public get Semester():string{
        return this._semester;
    }
    public set Semester(semester:string){
        if(semester == 'a' || semester == 'b' || semester == 'summer')
            this._semester = semester;
    }
    
    //ClassNumber
    public get ClassNumber():string{
        return this._classNumber;
    }
    public set ClassNumber(classNiumber:string){
        this._classNumber = this.ClassNumber;
    }

    // NumOfStudents
    public get NumOfStudents():number{
        return this._numOfStudents;
    }
    public set NumOfStudents(numOfStudents:number){
        if(numOfStudents > 0)
            this._numOfStudents = numOfStudents;
    }
    constructor(name:string,semester:string,classNumber:string,numOfStudents:number){
        this.Name = name;
        this.Semester = semester;
        this.ClassNumber = classNumber;
        this.NumOfStudents = numOfStudents;
    }
    toString():string{
        return `Course:${this.Name},Semester${this.Semester},${this.ClassNumber},
        ${this.NumOfStudents}`
    }

}