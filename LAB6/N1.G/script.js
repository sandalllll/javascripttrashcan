function labMainFunction()
{
	let l = parseInt(document.getElementById("reach-input-1").value);
	l = l || 0;
	if (l == 0)
	{
		document.getElementById("reach-output").value = "";
		return;
	}
	let s = Array(l);
	for (let i = s.length - 1; i >= 0; i--)
	{
		s[i] = Math.random() * 100;
	}
	s = s.join(' ');
	let width = 0;
	for (let i = 0; i < s.length; i++)
	{
		if (s[i] == ' ')
		{
			if (width == 4)
			{
				width = 0;
				s = s.substring(0, i) + '\n' + s.substring(i + 1);
			}
			else
				width++;
		}
	}
    document.getElementById("reach-output").value = s;
}