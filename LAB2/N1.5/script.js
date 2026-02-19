let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function max(a,b)
{
    return (a > b) ? a : b;
}

function ufunc(x, y, z)
{
    let tmp = max(0.5, x + z);
    return (max(x, y) + max(x + y, z)) / (tmp * tmp);
}

function labMainFunction()
{
    println(ufunc(
        document.getElementById("reach-input-1").value,
        document.getElementById("reach-input-2").value,
        document.getElementById("reach-input-3").value
    ));
}