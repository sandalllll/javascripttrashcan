let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function ageCheck(age)
{
    if (age < 18)
        println("Привет, малыш!");
    else
        println("Здравствуте, юноша!");
}

function labMainFunction()
{
    ageCheck(document.getElementById("reach-input").value);
}