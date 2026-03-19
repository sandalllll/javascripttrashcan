out = "";

function recurse(sum, val, index = 0)
{
	const myPromise = new Promise((resolve, reject) =>
	{
		setTimeout
		(
			() => {
				if ((typeof sum === 'number') || (typeof val === 'number'))
				{
					sum += val;
					resolve();
				}
				else
					reject();
			},
			2000
		)
	});
	myPromise.then(() =>
	{
		out = (out + sum + "\n");
		document.getElementById("reach-output").innerHTML = out;
		if ((index + 1) < 5)
		{
			recurse(sum, val, index + 1);
		}
		else
		{
			out += "That's all.\n";
			document.getElementById("reach-output").innerHTML = out;
		}
	}).catch((error) => {
		out += "Error.\n";
		document.getElementById("reach-output").innerHTML = out;
	});
}

function labMainFunction()
{
	recurse(-1, 2);
}