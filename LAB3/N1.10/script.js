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

function Calculator()
{
	this.read = function(a, b)
	{
		this.fv = a;
		this.sv = b;
	}
	this.sum = function()
	{
		return this.fv + this.sv;
	}
	this.mul = function()
	{
		return this.fv * this.sv;
	}
}

function labMainFunction()
{
	let calculator = new Calculator();
	calculator.read(5, -6.4);
	println(JSON.stringify(calculator));
	println(calculator.sum());
	println(calculator.mul());
	printout();
}