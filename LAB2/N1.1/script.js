let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function difference1(a, b)
{
    println(a - b);
}

function difference2(a, b)
{
    return a - b;
}

function labMainFunction()
{
    difference1(document.getElementById("reach-input-1").value, document.getElementById("reach-input-2").value);
    println(difference2(document.getElementById("reach-input-1").value, document.getElementById("reach-input-2").value));
}