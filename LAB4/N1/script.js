let strout = '';
function println(text)
{
    strout = strout + text + "\n";
}
function printout()
{
    document.getElementById("reach-output").innerHTML = strout;
	strout = '';
}

function ask_password(login, password, success, failure)
{
    let first = (login.replace(/[^b-zB-Z]/g, '').replace(/[eiouyEIOUY]/g, '') == password.replace(/[^b-zB-Z]/g, '').replace(/[eiouyEIOUY]/g, ''));
    let second = (password.replace(/[^aeiouyAEIOUY]/g, '').length == 3);
    //sleep(2000); //hard work?
    if (first && second)
    {
        success(login);
        return true;
    }
    switch (first + second * 2)
    {
        case 1:
            msg = "Wrong number of vowels";
            break;
        case 2:
            msg = "Wrong consonanst";
            break;
        default:
            msg = "Every thing is wrong";
            break;
    }
    failure(login, msg);
    return false;
}

function labMainFunction()
{
    ask_password(document.getElementById("reach-input-1").value, document.getElementById("reach-input-2").value,
        (login) =>
        {
            println("Привет " + login + "!");
        },
        (login, msg) =>
        {
            println("Кто-то пытался притвориться😈😈😈 пользователем " + login + ", но в пароле допустил ошибку: " + msg.toUpperCase() + ".");
        }
    );
	printout();
}