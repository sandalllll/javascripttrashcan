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
    
    readConfig('myConfig', () => {
        println('It is done!');
        doQuery('select * from cities', () => {
            println('It is done!');
            httpGet('http://google.com', () => {
                println('It is done!');
                readFile('README.md', () => {
                    println('It is done!');
                    printout();
                });
            });
        });
    });
}