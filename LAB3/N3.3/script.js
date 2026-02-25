class Clock
{
	constructor(template)
	{
		this.template = template;
	}
	
	render()
	{
		let date = new Date();
	
		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;
	
		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;
	
		let secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;
	
		let output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs);
	
		document.getElementById("reach-output").innerHTML = output;
	}
	
	stop()
	{
		clearInterval(this.timer);
	}
	
	start()
	{
		this.render();
		this.timer = setInterval(() => this.render(), 1000);
	}
}

class ExtendedClock extends Clock
{
	constructor(template, precision = 1000)
	{
		super(template);
		this.precision = precision;
	}
	
	start()
	{
		this.render();
		this.timer = setInterval(() => this.render(), this.precision);
	}
}

let clock = new ExtendedClock("h m s", 2000);

toggle = true;
function labMainFunction()
{
	if (toggle == true)
	{
		toggle = false;
		clock.start();
	}
	else
	{
		toggle = true;
		clock.stop();
		document.getElementById("reach-output").innerHTML = "";
	}
}