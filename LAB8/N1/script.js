
function proxyFetch(url, params)
{
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    return fetch(proxyUrl + url, params);
}

function start()
{
    proxyFetch("api.randomdatatools.ru/?params=LastName,FirstName", {
      method: "GET"
    }).then((value) => {value.json().then((value) =>
        {
            document.getElementById('name-disp').innerHTML = value.FirstName + " " + value.LastName;
            document.getElementById('con1B').disabled = false;
            document.getElementById('retryB').disabled = false;
        });});
}
start();

function retryName()
{
    document.getElementById('con1B').disabled = true;
    document.getElementById('retryB').disabled = true;
    document.getElementById('mainRepl1').innerHTML = "Хм... Тогда что насчет";
    document.getElementById('mainRepl2').innerHTML = "";
    document.getElementById('name-disp').innerHTML = "********";
    document.getElementById('mainRepl3').innerHTML = "?";
    start();
}

function con1()
{
    document.getElementById('entrnace').hidden = true;
    document.getElementById('innerPart').hidden = false;
}

function catdogfox(animal)
{
    document.getElementById('cats').disabled = true;
    document.getElementById('dogs').disabled = true;
    document.getElementById('foxes').disabled = true;
    proxyFetch("some-random-api.com/img/" + animal, {
      method: "GET"
    }).then((value) => {value.json().then((value) =>
    {
        document.getElementById("output-image").src = value.link;
    });});
		
    proxyFetch("some-random-api.com/facts/" + animal, {
      method: "GET"
    }).then((value) => {value.json().then((value) =>
    {
        document.getElementById("output-fact").innerHTML = value.fact;
		document.getElementById('cats').disabled = false;
		document.getElementById('dogs').disabled = false;
		document.getElementById('foxes').disabled = false;
    });});
}