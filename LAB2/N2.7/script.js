let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function labMainFunction()
{
    let arr = ['c', 5, 2, 'b', 3, 1, 4, 'a'];
    arr.sort();
    println(arr.join(" "));
}