// Addition of two numbers using DOM
function add() {
    let num1 = document.getElementById("num1").value;
    num1 = Number(num1);

    let num2 = document.getElementById("num2").value;
    num2 = Number(num2);

    let res = document.getElementById("addResult");
    res.innerHTML = num1 + num2;
}

// Subtraction of two numbers using DOM
function sub() {
    let num1 = document.getElementById("num3").value;
    num1 = Number(num1);

    let num2 = document.getElementById("num4").value;
    num2 = Number(num2);

    let res = document.getElementById("subResult");
    res.innerHTML = num1 - num2;
}

// Multiplication of two numbers using DOM
function mul() {
    let num1 = document.getElementById("num5").value;
    num1 = Number(num1);

    let num2 = document.getElementById("num6").value;
    num2 = Number(num2);

    let res = document.getElementById("mulResult");
    res.innerHTML = num1 * num2;
}

// Division of two numbers using DOM
function div() {
    let num1 = document.getElementById("num7").value;
    num1 = Number(num1);

    let num2 = document.getElementById("num8").value;
    num2 = Number(num2);

    let res = document.getElementById("divResult");
    res.innerHTML = num1 / num2;
}