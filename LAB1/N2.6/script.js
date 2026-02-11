function labMainFunction()
{	
	let x = document.getElementById("reach-input-1").value;
	let y = document.getElementById("reach-input-2").value;
	let n = 1;
	
	for (let i = 0; i < y; i++)
	{
		n *= x;
	}
    document.getElementById("reach-output").innerHTML = n;
}