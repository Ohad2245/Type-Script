class Circle{
    public static PI :number = 3.14;
    

    static calculateArea  = (radius:number):number => {
        return Circle.PI* radius * radius;
    }
    static calculateCircumference  = (radius:number):number =>{
        return Circle.PI*radius*2;
    }
}
console.log(Circle.calculateArea(2));
console.log(Circle.calculateCircumference(2));