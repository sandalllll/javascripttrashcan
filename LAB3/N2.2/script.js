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
	let animal =
	{
		eat()
		{
			this.full = true;
		}
	};
	
	let rabbit =
	{
		__proto__: animal
	};
	
	rabbit.eat();
	
	println(rabbit.full);//наследуемая функция создает новый ключ full со значением true
	
	printout();
}