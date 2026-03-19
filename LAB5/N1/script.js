
function labMainFunction()
{
    let promise = new Promise(function(resolve, reject)
    {
        resolve(1);
        //выводится 1. При вызове resolve эта функция завершается 
        setTimeout(() => resolve(2), 1000);
    });

    promise.then((x) => {document.getElementById("reach-output").innerHTML = x});
}