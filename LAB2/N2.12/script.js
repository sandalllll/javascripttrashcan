let strout = '';
function addline(text)
{
    strout = strout + text + "\n";
}

function print()
{
    document.getElementById("reach-output").innerHTML = strout;
	strout = '';
}

function labMainFunction()
{
    let arr = [-6, -8, 4, -1, -5, 4, 8, 0, 6];
	addline(arr.join(" "));
	for (let i = 0; i < arr.length; i++)
	{
		if (i % 2)
		{
			if (arr[i] > 0)
				arr[i] *= 3;
		}
		else
		{
			if (arr[i] < 0)
				arr[i] /= 5;
		}
	}
	addline(arr.join(" "));
	print();
}