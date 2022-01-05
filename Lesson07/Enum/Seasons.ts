enum Seasons{
    AUTUMN,
    WINTER,
    SPRING,
    SUMMER
}

// define the varible - number

// let mySeason:number = Seasons.WINTER;
let mySeason = Seasons.WINTER;

// adding prefix of + will convert to number:
// פלוס לפני , הופך את המשתנים למספר,במקום להוסיף נקודותיים נאמבר
switch(+mySeason){
    case Seasons.AUTUMN: console.log("We are in autumn");
        break;
    case Seasons.WINTER: console.log("We are in winter");
        break;
    case Seasons.SPRING: console.log("We are in spring");
        break;
    case Seasons.SUMMER: console.log("We are in summer");
        default:break;    
}