function func() {
    var randomNum = Math.ceil(Math.random() * 10);
    var guses1 = Number(document.getElementById('num1').value);
    var guses2 = Number(document.getElementById('num2').value);
    var guses3 = Number(document.getElementById('num3').value);
    if (guses1 == randomNum || guses2 == randomNum || guses3 == randomNum)
        alert("Good guess, number was : " + randomNum);
    else
        alert("Wrong! please try again...number was : " + randomNum);
}
