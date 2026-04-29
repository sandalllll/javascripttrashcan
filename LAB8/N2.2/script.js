start();

function request(url, callback)
{
	const req = new XMLHttpRequest();
	req.responseType = 'json';
	req.open("GET", "https://cors-anywhere.herokuapp.com/" + url);
	req.addEventListener("load", (value) => {console.log(req.response); callback();});
	req.send();
}

function requestPromise(url)
{
	return new Promise(function(resolve, reject)
    {
        request(url, () => {resolve();});
    });
}

function start()
{
    requestPromise("https://collectionapi.metmuseum.org/public/collection/v1/objects/8").then(corp);
}

function corp()
{
    requestPromise("https://corporatebs-generator.sameerkumar.website/").then(usel);
}

function usel()
{
    requestPromise("https://uselessfacts.jsph.pl/api/v2/facts/random").then(meme);
}

function meme()
{
    requestPromise("https://api.imgflip.com/get_memes").then(meow);
}

function meow()
{
    requestPromise("https://meowfacts.herokuapp.com/").then(none);
}

function none()
{}