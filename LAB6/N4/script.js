let table = document.getElementById("age-table");
alert(table)

let labels = table.getElementsByTagName("label");
alert(labels)

let td = table.getElementsByTagName("td")[0];
alert(td)

let form = [...document.querySelector("html body").getElementsByTagName("form")].filter(function(item) {
	return item.name == "search";
})[0];
alert(form)

let inputs = form.getElementsByTagName("input");
alert(inputs)

let firstInput = inputs[0];
alert(firstInput)

let lastInput = [...inputs].at(-1);
alert(lastInput)