let strout = '';
function println(text)
{
    strout = strout + text + "\n";
}
function printout()
{
    document.getElementById("reach-output").innerHTML = strout;
	strout = '';
}


function readConfig(name, callback)
{
    setTimeout
    (
        () => {
            println('(1) config from ' + name + ' loaded')
            callback()
        },
        Math.floor(Math.random() * 1000)
    )
}

function doQuery(statement, callback)
{
    setTimeout
    (
        () => {
            println('(2) SQL query executed: ' + statement)
            callback()
        },
        Math.floor(Math.random() * 1000)
    )
}

function httpGet(url, callback)
{
    setTimeout
    (
        () => {
            println('(3) Page retrieved: ' + url)
            callback()
        },
        Math.floor(Math.random() * 1000)
    )
}

function readFile(path, callback)
{
    setTimeout
    (
        () => {
            println('(4) Readme file from ' + path + ' loaded')
            callback()
        },
        Math.floor(Math.random() * 1000)
    )
}

function labMainFunction()
{
    println('start');
	
	const myPromise = new Promise((resolve, reject) =>
	{
		readConfig('myConfig', resolve);
	});
	
    myPromise.then(() =>
	{
		println('It is done!');
		const myPromise2 = new Promise((resolve, reject) =>
		{
			doQuery('select * from cities', resolve);
		});
		
		myPromise2.then(() =>
		{
			println('It is done!');
			const myPromise3 = new Promise((resolve, reject) =>
			{
				httpGet('http://google.com', resolve);
			});
			
			myPromise3.then(() =>
			{
				println('It is done!');
				const myPromise4 = new Promise((resolve, reject) =>
				{
					readFile('README.md', resolve);
				});
				
				myPromise4.then(() =>
				{
					println('It is done!');
					printout();
				})
			})
		});
	})
}