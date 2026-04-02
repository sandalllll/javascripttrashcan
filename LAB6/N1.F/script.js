function labMainFunction()
{
	let s = document.getElementById("reach-input-1").value;
    document.getElementById("reach-output").value = [...new Set(s.split(' '))].join(' ');
}