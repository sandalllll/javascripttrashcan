function labMainFunction()
{
	let str = "";
	{
		let i = 1;
		while (i <= 50)
		{
			str = str + i + ", "
			i++;
		}
	}
	
	str = str + "\n";
	
	for (let i = 1; i <= 50; i++)
	{
		str = str + i + ", "
	}
    document.getElementById("reach-output").innerHTML = str;
}