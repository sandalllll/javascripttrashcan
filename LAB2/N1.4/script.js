let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function labMainFunction()
{
    let variable = "Глобальная переменная";
    function f() {
    let variable = "Локальная переменная";
    console.log(variable);
    }
    f();
    console.log(variable);


    println("Переменная определенная в функции f имеет больший приоритет,\nт.к. поведение функции не должно меняться если, допустим было решено добавить глобальную переменную с совпавшим названием");
}