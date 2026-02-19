let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function labMainFunction()
{
    let arr = [2, 10, 6];
    println("arr[2] == " + arr[2] + ", arr.length == " + arr.length + ".\n-----------");
    arr.splice(1, 1);
    for (let i = 0; i < arr.length; i++)
    {
        println(arr[i]);
    }
}