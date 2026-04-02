function labMainFunction()
{
    let x = 2, y = 4, s = 2;
    let crsx = document.getElementById("reach-input-1").value;
    let crsy = document.getElementById("reach-input-2").value;
	document.getElementById("reach-output").value = (crsx <= (x - s * 0.5)) || (crsx >= (x + s * 0.5)) || (crsy <= (y - s * 0.5)) || (crsy >= (y + s * 0.5)) ? "Нет" : "Да";
}