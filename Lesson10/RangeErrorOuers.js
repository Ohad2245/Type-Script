function func(num){
    if(num > 10 || num < -10)
        throw new RangeError('Number must be between -10 to 10');
}

try{
    func(-20);
}catch(e){
    if(e instanceof RangeError) 
    console.log(e.message);
}