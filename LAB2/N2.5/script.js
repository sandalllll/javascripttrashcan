let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function labMainFunction()
{
    let a = [1, 2, 3, 4, 5, 6, 7]; 
	let d = a.splice(1, 3);
	println(a);
}