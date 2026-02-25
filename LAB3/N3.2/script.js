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
	class Animal
	{
		constructor(name)
		{
			this.name = name;
		}
	}
	class Rabbit extends Animal
	{
		constructor(name)
		{
			super(name);
			this.created = Date.now();
		}
	}
	let rabbit = new Rabbit("Белый кролик");
	println(rabbit.name);
	
	printout();
}