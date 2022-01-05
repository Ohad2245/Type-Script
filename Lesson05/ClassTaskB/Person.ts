class Person{

    public Name:string;

    public MyAddress: Address;
    public MyProfession: Profession;
    public MyBirthday: Birthday;

    public constructor(name:string, myAddress: Address, myProfession: Profession, myBirthday: Birthday){
        this.Name = name;
        this.MyAddress = myAddress;
        this.MyProfession = myProfession;
        this.MyBirthday = myBirthday;
    }

    toString(){
        return `${this.Name}: \nAddress: ${this.MyAddress}\nProfession:${this.MyProfession}\nBirthdate: ${this.MyBirthday}`;
    }
}