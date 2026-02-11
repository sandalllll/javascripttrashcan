num = 0;

function labMainFunction()
{
    console.log("--------------N1--------------");
    {
        let a = 1;
        console.log("let a = 1; type == " + typeof(a));
        let b = 'e';
        console.log("let b = 'e'; type == " + typeof(b));
        let c = 0.2;
        console.log("let c = 0.2; type == " + typeof(c));
        let d = "smthng";
        console.log('let d = "smthng"; type == ' + typeof(d));
        let e = labMainFunction;
        console.log('let e = labMainFunction; type == ' + typeof(e));
    }

    console.log("--------------N2--------------");
    {
        let a = 4.4;
        let b = -32;
        
        console.log("let a = 4.4; let b = -32;\n" +
            "(a == b) == " + (a == b) + "; " +
            "(a < b) == " + (a < b) + "; " +
            "(a <= b) == " + (a <= b) + "; " +
            "(a > b) == " + (a > b) + "; ");
    }

    console.log("--------------N3--------------");
    {
        let a = false;
        let b = null;
        let c = undefined;
        
        console.log("let a = false;\nlet b = null;\nlet c = undefined;\n" + 
            a + ", " + b + ", " + c);
    }

    console.log("--------------N4--------------");
    {
        console.log(
            '("1" + 2 + 3) == '             + ("1" + 2 + 3            ) + "\n" + //последовательная конкатенация
            '(1 + 2 + "3") == '             + (1 + 2 + "3"            ) + "\n" + //1 и 2 складываются, с 3 конкатенируются
            '("1" - 2) == '                 + ("1" - 2                ) + "\n" + //мниус для строк не определен, 1 конвертируется в число
            '("1" + - 2) == '               + ("1" + - 2              ) + "\n" + //1 конкатенируется с -2
            '("1" + "1" - "1") == '         + ("1" + "1" - "1"        ) + "\n" + //конкатенируются первые 2 еденицы, третья вычитается
            '("foo" + - "bar") == '         + ("foo" + - "bar"        ) + "\n" + //"bar" в число переводится как NaN, конкатенируется с "foo"
            '(0 == "0") == '                + (0 == "0"               ) + "\n" + //оба переводятся в число и сравниваются
            '(0.5 + 0.1 == 0.6) == '        + (0.5 + 0.1 == 0.6       ) + "\n" + //0.5 + 0.1 == 0.6
            '(0.1 + 0.2 == 0.3) == '        + (0.1 + 0.2 == 0.3       ) + "\n" + //0.1 + 0.2 == 0,299999987, 0.3 == 0,299999996 (2.999... взял из головы), 0.3 нельзя точно записать в 2ичном виде также как нельзя записать 1/3 в десятичном
            '(true + true + true == 3) == ' + (true + true + true == 3) + "\n" + //true переводится в 1 для суммирования
            '(true == 1) == '               + (true == 1              ) + "\n" + //true переводится в 1 для сравнения
            '(true === 1) == '              + (true === 1             ) + "\n" + //true не переводится в 1 для сравнения
            '(1 < 2 < 3) == '               + (1 < 2 < 3              ) + "\n" + //true(1 < 2) переводится в 1 для сравнения
            '(3 > 2 > 1) == '               + (3 > 2 > 1              ) + "\n" + //true(3 > 2) переводится в 1 для сравнения
            '(9007199254740991 + 1 == 9007199254740991 + 2) == ' + (9007199254740991 + 1 == 9007199254740991 + 2) + "\n" + //inf+ равно inf+ в стандарте IEEE для чисел с плавающей точкой
            '(Math.sqrt(-1) == Math.sqrt(-1)) == ' + (Math.sqrt(-1) == Math.sqrt(-1)) //NaN не равно NaN в стандарте IEEE для чисел с плавающей точкой
        );
    }

    console.log("--------------N5--------------");
    {
        let str1, str2, str3, concatenation;
        str1 = 'Кто ';
        str2 = 'ты ';
        str3 = 'такой?';
        concatenation = str1 + str2 + str3;
        console.log(concatenation);
    }

    console.log("--------------N6--------------");
    {
		let str = "20";
		let a = 5;
		console.log(str + a);  //конкатенация
		console.log(str - a);  //str переводится в int
		console.log(str * "2");//str переводится в int
		console.log(str / 2);  //str переводится в int
    }

    console.log("--------------N7--------------");
    {
		let a = "12";
		let b = "7.15";
		console.log(Math.round(Number(a) % Number(b)));
    }

    num++;
    if (num == 1)
        document.getElementById("name-to-reach").innerHTML = "-executed-";
    else
        document.getElementById("name-to-reach").innerHTML = "-executed-(" + num + ")";
}