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
	function Hamster()
	{
		return{
			stomach: [],
			eat(food)
			{
				this.stomach.push(food);
			}
		}
	}
	let speedy =
	{
		__proto__: new Hamster()
	};
	let lazy =
	{
		__proto__: new Hamster()
	};
	speedy.eat("apple");
	println(speedy.stomach); // apple
	println(lazy.stomach);
	//теперь ухомяков протиты это разные экземпляры
	
	printout();
}