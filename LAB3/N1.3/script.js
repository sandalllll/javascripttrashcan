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

function isEmpty(obj)
{
	return Object.keys(obj).length === 0;
}

function labMainFunction()
{
	let myBrowser = { "name" : "Microsoft Internet Explorer", "version" : "9.0"};
	println(isEmpty(myBrowser));
	let eSet = {};
	println(isEmpty(eSet));
	printout();
}