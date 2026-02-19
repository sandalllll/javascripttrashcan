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
    let matrix = [
		[  -9,   0,  16,  -7,   6,  12],
		[   5, -27,  -4,   5, -14,  -9],
		[ -14,  -6,   3,  -6,  -5,   6],
		[   3,   4, -28,  -2,   0,   4],
		[   0,  12,  10,  11,   6,  -3]
	];
	let rowsMaxSum = 0;
	let columnsMinMul = new Array(matrix[0].length).fill(1000);
	for (let i = 0; i < matrix.length; i++)
	{
		let line = matrix[i];
		rowsMaxSum += Math.max(...line);
		for (let j = 0; j < line.length; j++)
		{
			if (columnsMinMul[j] > line[j])
				columnsMinMul[j] = line[j];
		}
	}
	addline(rowsMaxSum);
	rowsMaxSum = 1;
	for (let i = 0; i < columnsMinMul.length; i++)
	{
		rowsMaxSum *= columnsMinMul[i];
	}
	addline(rowsMaxSum);
	print();
}