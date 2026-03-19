function F1(x, callback, sum = 0)
{
    setTimeout
    (
        () => {
			sum += x*x;
            callback({ "x" : x, "sum" : sum });
        },
        Math.floor(Math.random() * 1000)
    )
}

function F2(x, callback, sum = 0)
{
    setTimeout
    (
        () => {
			sum += x*2;
            callback({ "x" : x, "sum" : sum });
        },
        Math.floor(Math.random() * 1000)
    )
}

function F3(x, callback, sum = 0)
{
    setTimeout
    (
        () => {
			sum += -2;
            callback({ "x" : x, "sum" : sum });
        },
        Math.floor(Math.random() * 1000)
    )
}

//-----------------

async function labMainFunction()
{
	let result = await new Promise((resolve, reject) =>
	{
		F1(8, resolve);
	});
	
	result = await new Promise((resolve, reject) =>
	{
		F2(result.x, resolve, result.sum);
	});
		
	result = await new Promise((resolve, reject) =>
	{
		F3(result.x, resolve, result.sum);
	});

	document.getElementById("reach-output").innerHTML = result.sum;
}