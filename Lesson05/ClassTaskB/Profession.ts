class Profession{

    // _name:
    private _name:string;
    public set Name(name:string){
        this._name = name;
    }
    public get Name(){
        return this._name;
    }

    // _hoursPerMonth:
    private _hoursPerMonth:number;
    public set HoursPerMonth(hoursPerMonth:number){
        if(hoursPerMonth >= 0 &&  hoursPerMonth <= 80) 
            this._hoursPerMonth = hoursPerMonth;
    }
    public get HoursPerMonth(){
        return this._hoursPerMonth;
    }

     // _salary:
     private _salary:number;
     public set Salary(salary:number){
         if(salary >= 0 &&  salary <= 100000) 
             this._salary = salary;
     }
     public get Salary(){
         return this._salary;
     }

     // ctor:
     public constructor(name:string, hours:number, salary:number){
       this.Name = name;
       this.HoursPerMonth = hours;
       this.Salary = salary;
    }

    toString():string{
        return `Name: ${this.Name}, hours: ${this.HoursPerMonth}, salary: ${this.Salary}`;
    }
}