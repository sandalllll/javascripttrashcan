function labMainFunction()
{
	let sum = 0;
	for (let i = 1; i <= 6; i++)
	{
		sum += parseInt(document.getElementById("i" + i).value, 10);
	}
    if (sum === sum)
		document.getElementById("out").value = sum / 6;
	else
		document.getElementById("out").value = "???";
}