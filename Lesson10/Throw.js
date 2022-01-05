// throw - we must catch it with try&catch
const calcRectangle = (height , width) =>{
// isNaN() בודק אם הערך מספרי
    if(isNaN(height) || isNaN(width))
    throw "height / width is not a number... Please try again!"
        return height * width;

}
console.log("Start program");
try{
    console.log(calcRectangle("xx",3));
}catch(e){
    console.log(e)
}
console.log("End program");

