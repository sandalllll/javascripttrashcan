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
	String.prototype.color = "black";
	String.prototype.size = 14;
	
	String.prototype.write = function()
	{
		println("Цвет текста: " + this.color);
		println("Размер шрифта: " + this.size);
		println("Текст: " + this.toString());
	}
	
	let s = new String("Это строка");
	s.color = "red";
	s.size = 18;
	s.write();
	
	println("----");
	
	let s2 = new String("Вторая строка");
	s2.write();
	
	printout();
}