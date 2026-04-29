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

async function start()
{
    let nothing = await requestPromise("https://collectionapi.metmuseum.org/public/collection/v1/objects/8");
	corp();
}

async function corp()
{
    let nothing = await requestPromise("https://corporatebs-generator.sameerkumar.website/");
	usel();
}

async function usel()
{
    let nothing = await requestPromise("https://uselessfacts.jsph.pl/api/v2/facts/random");
	meme();
}

async function meme()
{
    let nothing = await requestPromise("https://api.imgflip.com/get_memes");
	meow();
}

function meow()
{
    requestPromise("https://meowfacts.herokuapp.com/");
}