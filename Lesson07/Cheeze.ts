class Cheeze extends Dairy{

// private property:
 private _type: string;
      
 // get - get the property outside the class:
    public get Type():string{
     return this._type;
 }
// set - set the property outside the class:
    public set Type(type:string){
        this._type = type;
}
      
 // ctor:
    public constructor(price:number,fatPrecent:number,type:string){
    super(price,fatPrecent);
    this.Type = type;
     }
 }

