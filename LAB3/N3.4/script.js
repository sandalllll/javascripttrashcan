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

class Stock
{
	constructor()
	{
		this.boxes = [];
		this.nextid = 0;
	}
	
	add(w, v)
	{
		this.boxes.push({id : this.nextid, weight : w, volume : v});
		this.nextid++;
	}
	
	getByW(min_w)
	{
		for (let i = this.boxes.length - 1; i >= 0; i--)
		{
			if (this.boxes[i].weight >= min_w)
			{
				let id = this.boxes[i].id;
				this.boxes.splice(i, 1);
				return id;
			}
		}
		return -1;
	}
	
	getByV(min_v)
	{
		for (let i = this.boxes.length - 1; i >= 0; i--)
		{
			if (this.boxes[i].volume >= min_v)
			{
				let id = this.boxes[i].id;
				this.boxes.splice(i, 1);
				return id;
			}
		}
		return -1;
	}
}

function labMainFunction()
{
	let stc = new Stock();
	stc.add(18, 56);//0
	stc.add(46, 13);//1
	stc.add(98, 6); //2
	stc.add(12, 66);//3
	stc.add(40, 20);//4
	stc.add(18, 10);//5
	println(stc.getByW(35));//4
	println(stc.getByV(60));//3
	println(stc.getByW(19));//2
	println(stc.getByW(90));//-1
	println(stc.getByV(50));//0
	println(stc.getByW(30));//1
	println(stc.getByW(1)); //5
	printout();
}