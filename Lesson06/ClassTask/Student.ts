class Student{
    private _name:string;
    private _age:number;
    private _subject:string;
    private _avgGrade:number;
    public static numOfStudent:number = 0;
    public static numOfAvgGrades:number = 0;

    
    // Name
    public get Name():string{
        return this._name;
    }
    public set Name(n:string){
        this._name =n;
    }
    // Age
    public get Age():number{
        return this._age;
    }
    public set Age(age:number){
        if(age >= 0 && age <= 120)
        this._age =age;
    }
    // Subject
    public get Subject():string{
        return this._subject;
    }
    public set Subject(subject:string){
        if(subject == 'Math' || subject == 'Computer science' 
        || subject == 'Art' || subject == 'Architecture')
        this._subject = subject;
    }
    // AvgGrade
    public get AvgGrade():number{
        return this._avgGrade;
    }
    public set AvgGrade(avgGrade:number){
        this._avgGrade = avgGrade;
    }

    constructor(name:string,age:number,subject:string,avgGrade:number){
        this.Name = name;
        this.Age = age;
        this.Subject = subject;
        this.AvgGrade = avgGrade;

        Student.numOfStudent++;
        Student.numOfAvgGrades += this.AvgGrade;
    }
    toString():string{
        return `student: ${this.Name}, studeis: ${this.Subject},
        avgGade:${this.AvgGrade} , age:${this.Age}`;
    }

    static AvgGrades():string{
        let res = Student.numOfStudent / Student.numOfAvgGrades;
        return `The avarage grade for all students:${res}`;
    }
}
    // Create array of students objects:
    let myStudents:Student[] =[
        new Student('A',20,'Math', 92),
        new Student('B',20,'Architecture', 99),
        new Student('C',20,'Computer Science', 80),
        new Student('D',20,'Art', 100),
    ];
    // Print 
    for(const student of myStudents){
        console.log(student.toString());
    }

    // Print avg Grade for all students
    console.log(Student.AvgGrades());


