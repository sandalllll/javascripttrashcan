function labMainFunction()
{
    let age = Math.floor(document.getElementById("reach-input").value - 0);
    if ((age != age) || !document.getElementById("reach-input").value || (age <= 0))
    {
        document.getElementById("reach-output").innerHTML = "Ошибка";
		return;
    }
    if (age >= 30)
    {
        document.getElementById("reach-output").innerHTML = "Для всех возрастов";
		return;
    }
    if (age >= 18)
    {
        document.getElementById("reach-output").innerHTML = "Для молодёжи";
		return;
    }
    document.getElementById("reach-output").innerHTML = "Для детей";
}