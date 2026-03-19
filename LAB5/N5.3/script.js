out = "";

async function recurse(sum, val, index = 0)
{
	let one = await new Promise(resolve => {
		setTimeout(() => {
			sum += val;
			resolve();
		}, 2000);
	});
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
}

function labMainFunction()
{
	recurse(-1, 2);
}