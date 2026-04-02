function labMainFunction()
{
    document.getElementById("reach-output").value = document.getElementById("reach-input-1").value.includes("@") ? "Верно" : "А где \"@\"?";
}