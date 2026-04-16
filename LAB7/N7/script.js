function labMainFunction()
{
	document.getElementById('rect-align').style = "margin: 0 auto; width: " + document.querySelector('input[name="alignment"]:checked').value + "%;";
	document.getElementById('main-rect').style = "width: " + (parseInt(document.getElementById("width").value) || 0) + "px; height: " + (parseInt(document.getElementById("height").value) || 0) + "px; background-color: " + document.getElementById("rect-color").value + ";";
	
}