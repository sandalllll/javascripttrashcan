let strout = '';
function addline(text)
{
    strout = strout + text + "\n";
}

function print()
{
    document.getElementById("reach-output").innerHTML = strout;
	strout = '';
}

function labMainFunction()
{
    let lib = {
		"Пушкин" : [ "Капитанская дочка", "Пророк", "Пиковая дама" ],
		"Есенин" : [ "Белая береза под моим окном", "Чёрный человек", "Москва кабацкая" ],
		"Чехов"  : [ "Хирургия", "Тоска", "Хамелеон" ]
	};
	
	Object.keys(lib).forEach
	(key => {
		addline(key);
		addline("\t" + (lib[key]).join("\n\t"));
	});
	
	print();
}