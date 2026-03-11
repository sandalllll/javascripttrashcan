function F1(x, callback, sum = 0)
{
    setTimeout
    (
        () => {
			sum += x*x;
            callback(x, sum)
        },
        Math.floor(Math.random() * 1000)
    )
}

function F2(x, callback, sum = 0)
{
    setTimeout
    (
        () => {
			sum += x*2;
            callback(x, sum)
        },
        Math.floor(Math.random() * 1000)
    )
}

function F3(x, callback, sum = 0)
{
    setTimeout
    (
        () => {
			sum += -2;
            callback(x, sum)
        },
        Math.floor(Math.random() * 1000)
    )
}

//-----------------

function callback1(x, sum)
{
	F2(x, callback2, sum)
}

function callback2(x, sum)
{
	F3(x, callback3, sum)
}

function callback3(x, sum)
{
	document.getElementById("reach-output").innerHTML = sum
}

function labMainFunction()
{
    F1(8, callback1);
}