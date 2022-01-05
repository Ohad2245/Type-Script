function func(){
    const randomNum:number = Math.ceil(Math.random() *10);

let guses1:number = Number((<HTMLInputElement>document.getElementById('num1')).value);
let guses2:number = Number((<HTMLInputElement>document.getElementById('num2')).value);
let guses3:number = Number((<HTMLInputElement>document.getElementById('num3')).value);

if(guses1 == randomNum || guses2 == randomNum || guses3 == randomNum)
    alert(`Good guess, number was : ${randomNum}`)
else alert(`Wrong! please try again...number was : ${randomNum}`);

}