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

function Accumulator(startingValue)
{
	this.value = startingValue;
	this.read = function(a)
	{
		this.value = this.value + a;
	}
}

function labMainFunction()
{
	let accumulator = new Accumulator(1);
	accumulator.read(10);
	accumulator.read(5);
	println(accumulator.value);
	printout();
}