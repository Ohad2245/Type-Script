abstract class Sport{

    public IsGroup:boolean;
    public IsIndoor:boolean;

    constructor(isGroup:boolean,isIndoor:boolean){
        this.IsGroup = isGroup;
        this.IsIndoor = isIndoor;
    }
    toString():string{
        return `Sport:isGroup: ${this.IsGroup} , isIndoor:${this.IsIndoor}`;
    }
    // חתימה של פונקצייה מופשטת
    // חתימה - מה פונצקיה מקבל ומה מחזירה
    public abstract numOfAwards():number;
}