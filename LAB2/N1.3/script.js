let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function max(a, b, c)
{
    let ab = (a > b) ? a : b;
    return (ab > c) ? ab : c;
}

function labMainFunction()
{
    println(max(
        document.getElementById("reach-input-1").value,
        document.getElementById("reach-input-2").value,
        document.getElementById("reach-input-3").value
    ));
}