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
	let calculator = {}; 
	calculator.read = function(a, b)
	{
		this.fv = a;
		this.sv = b;
	}
	calculator.sum = function()
	{
		return this.fv + this.sv;
	}
	calculator.mul = function()
	{
		return this.fv * this.sv;
	}
	
	calculator.read(5, -6.4);
	println(JSON.stringify(calculator));
	println(calculator.sum());
	println(calculator.mul());
	printout();
}