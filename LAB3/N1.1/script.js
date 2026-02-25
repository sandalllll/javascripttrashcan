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
	let user = {};
	user.name = "John";
	user.surname = "Smith";
	println(JSON.stringify(user));
	user.name = "Pete";
	println(JSON.stringify(user));
	delete user.name;
	println(JSON.stringify(user));
	printout();
}