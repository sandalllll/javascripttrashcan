function labMainFunction()
{
    let val = document.getElementById("reach-input-1").value;
    for (let i = 1; i < val; i++)
    {
        if (((Math.sqrt(i) % 1) == 0) && ((Math.sqrt(val - i) % 1) == 0))
        {
            document.getElementById("reach-output").value = "Да";
            return;
        }
    }
    document.getElementById("reach-output").value = "Нет";
}