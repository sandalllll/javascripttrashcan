function labMainFunction()
{
	let table = document.getElementById("reach-input-1").children[0];
	for (let i = 0; i < 25; i += 2)
	{
		table.children[Math.floor(i / 5)].children[i % 5].style.backgroundColor = "red";
	}
}