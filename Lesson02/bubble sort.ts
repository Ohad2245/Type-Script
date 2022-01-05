let arr:number[] =[2, 8, 5 ,0, 3, 4, 9, 1,6,7,10];
console.log(arr);
for(let i = 0;i < arr.length;i++){
    for(let j = 0;j < arr.length-1;j++){
        if(arr[j] > arr[j +1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);

let MagicSquare = (mat:number[][]):boolean =>{
    // Check rows:
    let sum = 0, MainRes = 0, flag:boolean = false;
    for(let row = 0;row < mat.length;row++){
        for(let column = 0; column < mat[row].length;column++)
            sum += mat[row][column];
            // Check first row:
        if(flag != true){ // (!flag)
            MainRes = sum;
            flag = true;
        } 
        // If one the rows different than MainRes - return false
        if (MainRes == sum) return false;
        sum = 0;
    }
    return true;
}
console.log();