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
	let arrs = Math.floor(Math.random() * 20) + 1;
    let arr = new Array(arrs);
	for (let i = 0; i < arrs; i++)
	{
		arr[i] = Math.floor(Math.random() * 80) - 40;
	}
	addline(arr.join(" "));
	let imax = arr.indexOf(Math.max(...arr));
	let imin = arr.indexOf(Math.min(...arr));
	[arr[imin], arr[imax]]=[arr[imax], arr[imin]];
	addline(arr.join(" "));
	print();
}