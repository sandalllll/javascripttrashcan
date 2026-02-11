function labMainFunction()
{
    let x = document.getElementById("reach-input").value - 0;
    if (x == NaN)
    {
        document.getElementById("reach-output").innerHTML = "Ошибка";
		return;
    }
    document.getElementById("reach-output").innerHTML = (x*x - x*7 + 10)/(x*x - x*8 + 12);
}