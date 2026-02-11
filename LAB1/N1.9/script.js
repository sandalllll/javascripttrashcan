function labMainFunction()
{
    let adr = document.getElementById("reach-input").value;
    if (adr.includes("@"))
    {
        document.getElementById("reach-output").innerHTML = "Все верно";
		return;
    }
    document.getElementById("reach-output").innerHTML = "Нет @";
}