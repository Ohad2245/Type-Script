class Dairy extends Food{
  // private property:
  private _fatPrecent: number;

  // get - get the property outside the class:
  public get FatPrecent():number{
      return this._fatPrecent;
  }
  // set - set the property outside the class:
  public set FatPrecent(fatPrecent:number){
      this._fatPrecent = fatPrecent;
  }

  // ctor:
  public constructor(price:number,fatPrecent:number){
      super(price);
      this.FatPrecent = fatPrecent;
    }
}