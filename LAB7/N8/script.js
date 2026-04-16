let currentState = 0;
let pge1MeterState;

function GoOffset(ofs)
{
	document.getElementById('pge' + (currentState + ofs)).hidden = false;
	document.getElementById('pge' + currentState).hidden = true;
	currentState += ofs;
}

function B00Reg()
{
	GoOffset(1);
	pge1MeterState = 0;
	setTimeout(() => {pge1MeterWork(0);}, 10)
}

function pge1MeterWork(i)
{
	if (i > 20)
	{
		GoOffset(1);
		return;
	}

	document.getElementById('pge1meter').style.width = i * 5 + "%";
	setTimeout(() => {pge1MeterWork(i + 1);}, 10)
}

function B02Can()
{
	document.getElementById('pge2name').value = "";
	document.getElementById('pge2sname').value = "";
	document.getElementById('pge2email').value = "";
	document.getElementById('pge2state').value = "";
	document.getElementById('pge2address').value = "";
	document.getElementById('pge2p1').value = "";
	document.getElementById('pge2p2').value = "";
}

function pge2Check()
{
	let pass = document.getElementById('pge2p1').value;
	if (document.getElementById('pge2name').value &&
	document.getElementById('pge2sname').value &&
	document.getElementById('pge2email').value &&
	document.getElementById('pge2state').value &&
	document.getElementById('pge2address').value &&
	pass && (pass == document.getElementById('pge2p2').value))
		document.getElementById('pge2next').disabled = false;
	else
		document.getElementById('pge2next').disabled = true;
}

function pge3Check()
{
	let val = document.getElementById('pge3phone').value;
	let havePlus = false;
	if (val.at(0) == "+")
		havePlus = true;
	val = val.replace(/\D/g, "");
	if (havePlus)
		val = "+" + val;
	document.getElementById('pge3phone').value = val;
	if (val)
		document.getElementById('pge3send').disabled = false;
	else
		document.getElementById('pge3send').disabled = true;
}

function pge3Code()
{
	let val = document.getElementById('pge3code').value;
	val = val.replace(/\D/g, "").substring(0, 4);
	document.getElementById('pge3code').value = val;
}

function B03Prover()
{
	if (document.getElementById('pge3code').value.length == 4)
		document.getElementById('pge3end').disabled = false;
	else
		document.getElementById('pge3end').disabled = true;
}

function pge4Check()
{
	let tmp = document.getElementById('pge4card1').value.replace(/\D/g, "").substring(0, 16);
	document.getElementById('pge4card1').value = tmp;
	let toSet = (tmp.length == 16);
	tmp = document.getElementById('pge4card2').value.replace(/\D/g, "").substring(0, 4);
	document.getElementById('pge4card2').value = tmp;
	toSet = (toSet && (tmp.length == 4));
	tmp = document.getElementById('pge4card3').value.replace(/\D/g, "").substring(0, 3);
	document.getElementById('pge4card3').value = tmp;
	toSet = (toSet && (tmp.length == 3));
	toSet = (toSet && document.getElementById('pge4card4').checked);
	document.getElementById('pge4end').disabled = !toSet;
}