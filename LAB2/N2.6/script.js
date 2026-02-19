let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function labMainFunction()
{
    let arr = [1, 2, 3, 4, 5];
    arr.reverse();
    println(arr.join(" "));
}