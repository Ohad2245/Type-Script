class Child{
    
    // private property:
    private _age:number;

    // setter function:
    // we can add to setter function validation check:
    public setAge(age:number):void{
        if(age >= 0 && age <= 120)
            this._age = age;
        // מאפשר להכניס נתונים
    }

    // getter function:
    public getAge():number{
        return this._age;
        // מאפשר להוציא נתונים מחוץ לקלאס
    }
}

let child1 = new Child();
child1.setAge(1);
console.log(child1.getAge()); // return from getAge() // 1

