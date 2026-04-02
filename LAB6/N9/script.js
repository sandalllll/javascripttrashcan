let names = [
	["Тото", "Онович"],
	["Денис", "Чистяков"],
	["Николай", "Романов"],
	["Даниэль", "Лопатин"],
	["Йоханн", "Миллис"],
	["Стас", "Давыдов"],
	["Дзига", "Вертов"]
];

function RandomName()
{
	return names[Math.floor(Math.random() * 7)][0];
}

function RandomSurname()
{
	return names[Math.floor(Math.random() * 7)][1];
}

function Cycle(displ, i)
{
	let card = document.createElement("div");
	card.setAttribute("class", "card")
	displ.appendChild(card);
	{
		let img = document.createElement("img");
		img.setAttribute("src", i + ".png");
		img.setAttribute("alt", "Avatar");
		card.appendChild(img);
	}
	
	let innerDiv = document.createElement("div");
	innerDiv.setAttribute("class", "description");
	card.appendChild(innerDiv);
	
	let p = document.createElement("p");
	p.innerHTML = RandomName() + " " + RandomSurname();
	innerDiv.appendChild(p);
	
	if (i < 5)
		setTimeout(Cycle, 500, divDispl, i+1);
}

let body = document.querySelector("html body");

{
	let header = document.createElement("header");
	body.appendChild(header)
}

let main = document.createElement("main");
main.setAttribute("class", "content");
body.appendChild(main)

{
	let aside = document.createElement("aside");
	main.appendChild(aside)
}

let section = document.createElement("section");
main.appendChild(section);

{
	let divHeader = document.createElement("div");
	divHeader.setAttribute("class", "header-d")
	divHeader.innerHTML = "Выберите лицо, которое нравится вам больше остальных:"
	section.appendChild(divHeader);
}

let divDispl = document.createElement("div");
divDispl.setAttribute("class", "display")
section.appendChild(divDispl);

setTimeout(Cycle, 500, divDispl, 0);