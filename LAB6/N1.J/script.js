function labMainFunction()
{
	let date = new Date(document.getElementById("reach-input-1").value);
	let months = 8;
    if (date.getMonth() >= 8)
	{
        months = 20;
    }
	months -= date.getMonth();
    document.getElementById("reach-output").value = months;
}