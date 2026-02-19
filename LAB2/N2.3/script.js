let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function labMainFunction()
{
    let arr = ["January", "February", "March", "April", "May", "June"];
    let len = arr.pop();
    println(arr.join(" "));
    println(len);
}