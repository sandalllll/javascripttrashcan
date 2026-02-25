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
	let ladder =
	{
		step: 0,
		
		up()
		{
			this.step++;
			return this;
		},
		
		down()
		{
			this.step--;
			return this;
		},
		
		showStep: function()
		{
			println(this.step);
			return this;
		}
	}; 
	
	ladder.up().up().down().showStep().down().showStep();
	printout();
}