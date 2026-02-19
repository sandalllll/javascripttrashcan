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
    let arr = [9, 8, 7, 6, 5, 4, 3, 2, 2];
	for (let i = 1; i < arr.length; i++)
	{
		if (arr[i] > arr[i - 1])
		{
			addline(i);
			print();
			return;
		}
	}
	arr.reverse();
	addline(arr.join(" "));
	print();
}