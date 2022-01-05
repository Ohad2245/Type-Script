let myPepole: Person[] = [
    new Person("Alex",new Address(1,"x","Ariel","Israel"),new Profession("Teacher",40,100000),
    new Birthday(2,5,1990)),
    new Person("Bracha",new Address(1,"x","Ariel","Israel"),new Profession("Teacher",40,100000),
    new Birthday(26,9,1994))
]

for(const person of myPepole){
    console.log(person.toString());
}