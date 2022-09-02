const addition = () =>
{
    let a = Number.parseInt(document.getElementById("get_first_value").value);
    let b = Number.parseInt(document.getElementById("get_second_value").value);

    let total = a + b;
    document.getElementById("put_value").innerHTML = "Ans: The addition of "+a+" and "+b+" is "+total;
}
const substraction = () =>
{
    let a = Number.parseInt(document.getElementById("get_first_value").value);
    let b = Number.parseInt(document.getElementById("get_second_value").value);

    let total = a - b;
    document.getElementById("put_value").innerHTML = "Ans: The substraction of "+a+" and "+b+" is "+total;
}
const multiplaction = () =>
{
    let a = Number.parseInt(document.getElementById("get_first_value").value);
    let b = Number.parseInt(document.getElementById("get_second_value").value);

    let total = a * b;
    document.getElementById("put_value").innerHTML = "Ans: The multiplaction of "+a+" and "+b+" is "+total;
}
const divison = () =>
{
    let a = Number.parseInt(document.getElementById("get_first_value").value);
    let b = Number.parseInt(document.getElementById("get_second_value").value);

    let total = a / b;
    document.getElementById("put_value").innerHTML = "Ans: The divison of "+a+" and "+b+" is "+total;
}