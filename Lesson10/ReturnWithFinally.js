
// Notice that finally will run before try & catch
// Happen because try and catch use 'return'.
const geData = num => {
    console.log('Start program...');

    try{
       return num.toString();
    }catch(e){
        return e.message; 
    }finally{
        console.log('In finally');
    }
    // לא יגיע לקטע הזה
    console.log('End program...');
}

console.log(geData(12));
console.log(geData(null));

/*
Start program...
In finally
12
Start program...
In finally
*/