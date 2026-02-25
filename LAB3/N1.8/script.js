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

function Browser(name, version)
{
	this.name = name;
	this.version = version;
	this.aboutBrowser = function()
	{
		println(`Browser: ${this.name}, version: «${this.version}».`);
	}
}

function labMainFunction()
{
	let myBrowser = new Browser("Microsoft Internet Explorer", "9.0");
	myBrowser.aboutBrowser();
	
	printout();
}