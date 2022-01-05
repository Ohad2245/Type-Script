function CreatePaints():IPaint{
    let rand:number = Math.floor(Math.random()*2);

    switch(rand){
        case 0:
            return new Pencil('black',"yelow",1, false);
        case 1:
            return new Pen("black",200,0.5,"ink");
        case 2:
            return new OilPaints("red",350,"high");
        default: return null;            
    }
}

let myPaints:IPaint[] = new Array<IPaint>(10);

for(let i = 0;i< myPaints.length;i++){
    myPaints[i] = CreatePaints();
    console.log(`Paint: ${myPaints[i].color},
    waterBase: ${myPaints[i].isWaterBase()}`);
}