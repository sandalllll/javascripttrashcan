function labMainFunction()
{
    let count = document.getElementById("reach-input").value;
	if (!count || ((count = count-0) < 1) || (count > 10) || ((count - Math.floor(count)) != 0))
	{
		document.getElementById("reach-output").innerHTML = "Ошибка";
		return;
	}
	let str = "На ветке сидит " + count + " ворон";
	if (count == 1)
		str = str + "а";
	else if (count < 5)
		str = str + "ы";
    document.getElementById("reach-output").innerHTML = str;
}