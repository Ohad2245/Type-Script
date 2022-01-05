class Reptile extends Animal{

    public static readonly WarmBlooded:boolean = false;
    public HasSkales:boolean;
    public NumOfEggsPerYear:number;

    public constructor(age:number, numOfLegs:number, HasSkales:boolean, NumOfEggsPerYear:number){
        super(age, numOfLegs);
        this.HasSkales = HasSkales;
        this.NumOfEggsPerYear = NumOfEggsPerYear;
    }

    public toString():string{
        return super.toString() + ` HasSkales: ${this.HasSkales}, NumOfEggsPerYear: ${this.NumOfEggsPerYear} `;
    }
}
