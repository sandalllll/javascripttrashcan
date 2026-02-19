let strout = '';
function println(text)
{
    strout = strout + text + "\n";
    document.getElementById("reach-output").innerHTML = strout;
}

function distance(a, b)
{
    let dx = a[0]-b[0];
    let dy = a[1]-b[1];
    return Math.sqrt(dx*dx + dy*dy);
}

function perim(points)
{
    let sum = distance(points[0], points.at(-1));
    for (let i = 1; i < points.length; i++)
    {
        sum += distance(points[i], points[i-1]);
    }
    return sum;
}

function labMainFunction()
{
    let points = [
        [0, 0],
        [1, 0],
        [0, 1]
    ]

    println(perim(points));
}