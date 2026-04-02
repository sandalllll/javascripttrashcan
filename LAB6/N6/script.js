function labMainFunction()
{
	let body = document.querySelector("html body");
	let as = body.getElementsByTagName("a");
	for (let i = [...as].length; i >= 0; i--)
	{
		if (as[i] && as[i].href && (as[i].href.substring(0, 19) != "http://internal.com") && as[i].href.includes("://"))
			as[i].style.color = "red";
	}
	//кажется что неверно, но на самом деле я сделал все по ТЗ
}