let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function printc1(cou, pop)
{
    for (let i = 0; i < cou.length; i++)
    {
        println(cou[i] + ": " + pop[i]);
    }
}

function printc2(cou, pop)
{
    for (let i in cou)
    {
        println(cou[i] + ": " + pop[i]);
    }
}

function labMainFunction()
{
    let countries = ["Китай",     "США",     "Россия", "Германия"];
    let population = [1408280000, 341169410, 14615078, 84669326];
    printc1(countries, population);
    println("----------");
    printc2(countries, population);
}