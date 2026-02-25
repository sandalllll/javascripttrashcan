let strout = '';
function println(text)
{
    strout = strout + text + "\n";
}
function printout()
{
    document.getElementById("reach-output").innerHTML = strout;
	strout = '';
}

function Employee(name, department, phoneNum, salary)
{
	this.name = name;
	this.department = department;
	this.phoneNum = phoneNum;
	this.salary = salary;
	this.aboutEmployee = function()
	{
		println(`Name: ${this.name}, department: ${this.department}, phone number: ${this.phoneNum}, salary: ${this.salary}.`);
	}
}

function labMainFunction()
{
	let employee = new Employee("Александр", "HR", "123456789", 120000);
	employee.aboutEmployee();
	
	printout();
}