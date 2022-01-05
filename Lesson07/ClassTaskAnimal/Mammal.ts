class Mammal extends Animal{

    public static readonly WarmBlooded:boolean = true;
    public HairColor:string;
    public BabyWeight:string;

    
    public constructor(age:number,numOfLegs:number,HairColor:string,BabyWeight:string){
        super(age,numOfLegs);  
        this.HairColor = HairColor;
        this.BabyWeight = BabyWeight;
       
    }
    public toString():string{
        return super.toString() + 
        `HairColor : ${this.HairColor}, BabyWeight : ${this.BabyWeight}`;
    }
}