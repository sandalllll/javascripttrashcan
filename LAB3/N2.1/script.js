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
	let animal =
	{
		jumps: null
	};
	let rabbit =
	{
		__proto__: animal,
		jumps: true
	};
	println(rabbit.jumps); // true
	delete rabbit.jumps; 
	println(rabbit.jumps); // null (значение по умолчанию)
	delete animal.jumps; 
	println(rabbit.jumps); // undefined (такого ключа нет)
	printout();
}