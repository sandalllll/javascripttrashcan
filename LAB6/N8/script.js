function labMainFunction()
{
	let listBase = document.getElementById("list");
	let amount = parseInt(document.getElementById("reach-input-1").value) || 0;
	listBase.innerHTML = null;
	for (let i = 0; i < amount; i++)
	{
		listBase.innerHTML += ("<li>" + Math.random() * 100 + "</li>");
	}
}