async function wait()
{
	await new Promise(resolve => setTimeout(resolve, 1000)); 
	return 10; 
}

function labMainFunction()
{
	wait().then((result) => {
		document.getElementById("reach-output").innerHTML = result;
	});
}