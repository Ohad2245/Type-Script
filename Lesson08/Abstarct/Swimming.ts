 class Swimming extends Sport{

    public IsInPool:boolean;
    public MustHaveHat:boolean;

    constructor(isGroup:boolean, isIndoor:boolean, isInPool:boolean){
       super(isGroup, isIndoor);
       this.IsInPool = isInPool;

       if(isInPool == true) this.MustHaveHat = true;
    }

    public numOfAwards():number{
        return 2;
    }

    toString():string{
        let res =  super.toString() + ` IsInPool: ${this.IsInPool}`;
        if(this.IsInPool == true) res += ` Hat is a must!`;
        return res;
    }

}
