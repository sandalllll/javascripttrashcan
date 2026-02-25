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
	function Rabbit() {}
	Rabbit.prototype =
	{
		eats: true
	};
	
	let rabbit = new Rabbit();
	
	println(rabbit.eats); // true
	Rabbit.prototype = {};
	println(rabbit.eats); // true, т.к. rabbit - экземпляр, который не затрагивается изменениями в конструкторе
	Rabbit.prototype.eats = false;
	println(rabbit.eats); // true, т.к. rabbit - экземпляр, который не затрагивается изменениями в конструкторе
	delete rabbit.eats;
	println(rabbit.eats); // true, т.к. удаляется ключ в самом объекте а не в его прототипе
	delete Rabbit.prototype.eats;
	println(rabbit.eats); // true, т.к. rabbit - экземпляр, который не затрагивается изменениями в конструкторе
	
	printout();
}