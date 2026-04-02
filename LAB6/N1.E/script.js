function labMainFunction()
{
	let s = document.getElementById("reach-input-1").value;
    document.getElementById("reach-output").value = s.replace(/[^A-Za-z]/g, "").length / s.length * 100.0 + "%";
}