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

function multiplyNumeric(obj)
{
	for (k in obj)
	{
		if ((typeof obj[k]) === (typeof 5))
		{
			obj[k] = obj[k] * 2;
		}
	}
}

function labMainFunction()
{
	user =
	{ 
		name: "John",
		age: 20
	};
	println(JSON.stringify(user));
	multiplyNumeric(user);
	println(JSON.stringify(user));
	printout();
}