function labMainFunction()
{
	let size = parseInt(document.getElementById("reach-input-1").value);
	size = size || 0;
	if (size == 0)
	{
		document.getElementById("reach-output").value = "";
		return;
	}
	let matrix = Array(size);
	for (let i = 0; i < size; i++)
	{
		matrix[i] = Array(size);
		for (let j = 0; j < size; j++)
		{
			matrix[i][j] = Math.random() * 100.0;
		}
	}
	let min = matrix[0][0];
	let max = min;
	for (let i = 0; i < size; i++)
	{
		if (matrix[i][i] < min)
			min = matrix[i][i];
		else if (matrix[i][i] > max)
			max = matrix[i][i];
		
		if (matrix[i][size - 1 - i] < min)
			min = matrix[i][size - 1 - i];
		else if (matrix[i][size - 1 - i] > max)
			max = matrix[i][size - 1 - i];
	}
	for (let i = 0; i < size; i++)
	{
		if (!((matrix[i][i] == min) || (matrix[i][i] == max)))
			matrix[i][i] = 0;
		
		if (!((matrix[i][size - 1 - i] == min) || (matrix[i][size - 1 - i] == max)))
			matrix[i][size - 1 - i] = 0;
	}
	for (let i = 0; i < size; i++)
	{
		matrix[i] = matrix[i].join(' ');
	}
		matrix = matrix.join('\n');
    document.getElementById("reach-output").value = matrix;
}