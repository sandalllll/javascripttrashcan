function labMainFunction()
{
    let divs = document.getElementsByTagName('div');
    if (divs.length && divs[0].innerHTML == "text")
    {
        divs[0].remove();
    }
}