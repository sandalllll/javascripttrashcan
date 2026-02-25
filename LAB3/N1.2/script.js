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

function labMainFunction()
{
	let myBrowser = { "name" : "Microsoft Internet Explorer", "version" : "9.0"};
	for (k in myBrowser)
	{
		println("\"" + k + "\" : \"" + myBrowser[k] + "\"");
	}
	printout();
}