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
	const user = { 
		name: "John" 
	};
	println(JSON.stringify(user));
	user.name = "Pete";//изменять значения ключей объекта можно
	println(JSON.stringify(user));
	try
	{
		user = 123;//а сам объект нельзя т.к. он - констатнта
	} catch(_) {}
	println(JSON.stringify(user));
	printout();
}