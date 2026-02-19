let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function labMainFunction()
{
    let arr = [1, 2, 5, 4, 6]
	let arr2 = [8, 2, 5, 9, 5];
	arr = arr.concat(arr2);
	arr.sort();
    println(arr.join(" "));
    println((arr.length % 2) ? arr[(arr.length - 1) / 2] : (arr[arr.length / 2 - 1] + arr[arr.length / 2]) * 0.5);
}