start();

function request(url, callback)
{
	const req = new XMLHttpRequest();
	req.responseType = 'json';
	req.open("GET", "https://cors-anywhere.herokuapp.com/" + url);
	req.addEventListener("load", (value) => {console.log(req.response); callback();});
	req.send();
}

function start()
{
    request("https://collectionapi.metmuseum.org/public/collection/v1/objects/8", corp);
}

function corp()
{
    request("https://corporatebs-generator.sameerkumar.website/", usel);
}

function usel()
{
    request("https://uselessfacts.jsph.pl/api/v2/facts/random", meme);
}

function meme()
{
    request("https://api.imgflip.com/get_memes", meow);
}

function meow()
{
    request("https://meowfacts.herokuapp.com/", none);
}

function none()
{}