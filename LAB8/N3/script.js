async function getData(count)
{
    return (await (await fetch("https://cors-anywhere.herokuapp.com/api.randomdatatools.ru/?params=FirstName,LastName,YearsOld,Gender,Address,Phone&count=" + count, {
      method: "GET"
    })).json())
}

function load()
{
	document.getElementById("load-b").disabled = true;
    getData(Math.floor(Math.random() * 4) + 2).then(loadFin);
}

let humans = []

function loadFin(humansT)
{
	humans = humansT;
	visualize(humansT);
	document.getElementById("load-b").disabled = false;
}

function visualize(humansT)
{
	let table = document.getElementById("output-table");
	table.innerHTML = '';
	{
		let row = document.createElement('tr');
		let col = document.createElement('th');
		col.innerHTML = "Имя";
		row.appendChild(col);
		col = document.createElement('th');
		col.innerHTML = "Фамилия";
		row.appendChild(col);
		col = document.createElement('th');
		col.innerHTML = "Возраст";
		row.appendChild(col);
		col = document.createElement('th');
		col.innerHTML = "Пол";
		row.appendChild(col);
		col = document.createElement('th');
		col.innerHTML = "Адрес";
		row.appendChild(col);
		col = document.createElement('th');
		col.innerHTML = "Телефон";
		row.appendChild(col);
		table.appendChild(row);
	}
	for (let i = 0; i < humansT.length; i++)
	{
		let row = document.createElement('tr');
		let col = document.createElement('th');
		col.innerHTML = humansT[i].FirstName;
		row.appendChild(col);
		col = document.createElement('th');
		col.innerHTML = humansT[i].LastName;
		row.appendChild(col);
		col = document.createElement('th');
		col.innerHTML = humansT[i].YearsOld;
		row.appendChild(col);
		col = document.createElement('th');
		col.innerHTML = humansT[i].Gender;
		row.appendChild(col);
		col = document.createElement('th');
		col.innerHTML = humansT[i].Address;
		row.appendChild(col);
		col = document.createElement('th');
		col.innerHTML = humansT[i].Phone;
		row.appendChild(col);
		table.appendChild(row);
	}
}

let view = 0;

function toggleView()
{
	view = (view + 1) % 3;
	let button = document.getElementById("show-b");
	switch (view)
	{
		case 0:
		button.innerHTML = "Все";
		visualize(humans);
		break;
		case 1:
		button.innerHTML = "Мужчины";
		{
			humansT = []
			for (let i = 0; i < humans.length; i++)
			{
				if (humans[i].Gender[0] == 'М')
					humansT.push(humans[i]);
			}
			visualize(humansT);
		}
		break;
		case 2:
		button.innerHTML = "Женщины";
		{
			humansT = []
			for (let i = 0; i < humans.length; i++)
			{
				if (humans[i].Gender[0] != 'М')
					humansT.push(humans[i]);
			}
			visualize(humansT);
		}
		break;
	}
}