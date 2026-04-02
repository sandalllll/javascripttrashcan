function labMainFunction()
{
	let days = parseInt(document.getElementById("reach-input-1").value);
	days = days || 0;
	let date = new Date();
	date.setDate(date.getDate() + days);
    document.getElementById("reach-output").value = date;
}