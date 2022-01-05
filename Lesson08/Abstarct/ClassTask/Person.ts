abstract class Person{

    private _name:string;
    private _age:number;
    private _id:string; 
    private _address:Address;

 // Name:
 public get Name():string{
    return this._name;
}
public set Name(name:string){
    this._name = name;
}

//Age
public get Age():number{
    return this._age;
}
public set Age(age:number){
    if(age < 120 || age > 0)
        this._age = age;
}

//ID
public get Id():string{
    return this._id;
}
public set Id(id:string){
    this._id = id;
}

public get Address():Address{
    return this._address;
}
public set Address(address:Address){
    this._address = address;
}
    constructor(name:string,age:number,id:string,address:Address){
        this.Name = name;
        this.Age = age;
        this.Id = id;
        this.Address = address;
    }
    toString():string{
        return `Person:${this.Name},is${this.Age},years old, id ${this.Id},
        Address :${this.Address.toString()}`
    }
}