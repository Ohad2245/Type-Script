// Computer has a CPU - compisition
class Computer{
    // Properties:
    public Company:string;
    public Price:number;
    // This property type is from another class we created
    public Cpu: CPU; // composition

    // Print all the data to the user
    toString():string{
        return `Computer from ${this.Company},costs:${this.Price},
        and it's CPU ${this.Cpu}`;
    }
}

let c1 = new Computer();
c1.Company = "Dell";
c1.Price = 2500;
c1.Cpu = new CPU(453264, 8, "Intel", 800);
console.log(c1.toString());