class Person{
    // Properties:
    public Name:string;
    public Age:number;

    public constructor(name?:string,age?:number){
        this.Name = name;
        this.Age = age;
    }
}

// Create 4 instance in different ways - using the ctor:
let p1 = new Person();
let p2 = new Person("Alex");
let p3 = new Person("Alex",45);
let p4 = new Person(undefined,45);


