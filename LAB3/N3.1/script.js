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

class Clock
{
	constructor(hours, minutes, seconds)
	{
		this.h = hours;
		this.m = minutes;
		this.s = seconds;
	}
	
	print()
	{
		println(`Hours: ${this.h}, minutes: ${this.m}, seconds: ${this.s}.`);
	}
}

function labMainFunction()
{
	let clock = new Clock(20, 57, 33);
	
	clock.print();
	
	printout();
}