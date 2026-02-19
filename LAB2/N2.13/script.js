let strout = '';
function addword(text)
{
    strout = strout + text + ", ";
}

function print()
{
    document.getElementById("reach-output").innerHTML = strout;
	strout = '';
}

function labMainFunction()
{
    let matrix = [
		[  -9,   0,  16,  -7,   6],
		[   5, -27,  -4,   5, -14],
		[ -14,  -6,   3,  -6,  -5],
		[   3,   4, -28,  -2,   0],
		[   0,  12,  10,  11,   6]
	];
	for (let i = 0; i < matrix.length; i++)
	{
		let line = matrix[i];
		for (let j = 0; j < line.length; j++)
		{
			if ((line[j] >= -5) && (line[j] <= 7))
				addword(line[j]);
		}
	}
	print();
}