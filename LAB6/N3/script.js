function labMainFunction()
{
	let body = document.querySelector("html body");
	divs = body.getElementsByTagName("div");
	uls = body.getElementsByTagName("ul");
	lis = uls[0].getElementsByTagName("li");
    document.getElementById("reach-output").value = divs[0].innerHTML + ', ' + lis[1].innerHTML;
}