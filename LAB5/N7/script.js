function println(str)
{
	document.getElementById("reach-output").innerHTML += (str + "\n");
}

async function interThis(human, iter = 0)
{
	let o = iter == 0 ? "1" : "2";
	println(human[0] + " started the " + o + " task.");
	await new Promise(resolve => {setTimeout(resolve, human[1 + iter] * 1000);});
	println(human[0] + " moved on to the defence of the " + o + " task.");
	await new Promise(resolve => {setTimeout(resolve, human[2 + iter] * 1000);});
	println(human[0] + " completed the " + o + " task.");
	if (iter == 0)
	{
		println(human[0] + " is resting.");
		await new Promise(resolve => {setTimeout(resolve, 5 * 1000);});
		interThis(human, 2)
	}
}

function interviews(arr)
{
	for (let i = 0; i < arr.length; i++)
	{
		interThis(arr[i]);
	}
}

function labMainFunction()
{
	interviews([['Ivan', 5, 2, 7, 2], ['John', 3, 4, 5, 1], ['Sophia', 4, 2, 5, 1]]);
}