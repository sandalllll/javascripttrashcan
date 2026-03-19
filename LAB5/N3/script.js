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

function labMainFunction()
{
	const myPromise = new Promise((resolve, reject) =>
	{
		F1(8, resolve);
	});
	
    myPromise.then(result =>
	{
		const myPromise2 = new Promise((resolve, reject) =>
		{
			F2(result.x, resolve, result.sum);
		});
		
		myPromise2.then(result =>
		{
			const myPromise3 = new Promise((resolve, reject) =>
			{
				F3(result.x, resolve, result.sum);
			});
			
			myPromise3.then(result =>
			{
				document.getElementById("reach-output").innerHTML = result.sum;
			});
		});
	});
}