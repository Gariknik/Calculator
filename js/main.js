// Вводим переменные 
let a = Number(prompt ('Введитете число к переменной a')),
	b = Number(prompt ('Введите число к переменной b'));

// Прописываем переменные операций с введёнными числами
let addition = a + b,
	subtraction = a - b,
	multiplication = a * b,
	division = a / b,
	modul = a % b;

// проверка на дробное и целое значение
// Получаем операции и присваиваем их в переменные
let operationAddition = document.getElementById ("addition"),
	operationSubtraction = document.getElementById ("subtraction"),
	operationMultiplication = document.getElementById ("multiplication"),
	operationDivision = document.getElementById ("division"),
	operationModul = document.getElementById ("modul"),
	operationSumOperation = document.getElementById ("sumOperation"),
	operationSum = document.getElementById ("sum"),
	test = document.getElementsByTagName("body")[0],
	calculatorTitle = document.getElementsByClassName("calculator__title")[0];

// для сложения
if (Number.isInteger(addition)) {
	operationAddition.innerText = "Результат сложения: " + addition + " - целое";
} else {
	operationAddition.innerText = "Результат сложения: " + addition + " - дробное";
}
// для вычитания
if (Number.isInteger(subtraction)) {
	operationSubtraction.innerText = "Результат вычитания: " + subtraction + " - целое";
} else {
	operationSubtraction.innerText = "Результат вычитания: " + subtraction + " - дробное";
}

// для умножения
if (Number.isInteger(multiplication)) {
	operationMultiplication.innerText = "Результат умножения: " + multiplication + " - целое";
} else {
	operationMultiplication.innerText = "Результат умножения: " + multiplication + " - дробное";
}

// для деления
if (Number.isInteger(division)) {
	operationDivision.innerText = "Результат деления: " + division + " - целое";
} else {
	operationDivision.innerText = "Результат деления: " + division + " - дробное";
}

// для остатка от деления
if (Number.isInteger(modul)) {
	operationModul.innerText = "Результат остатка от деления: " + modul + " - целое";
} else {
	operationModul.innerText = "Результат остатка от деления: " + modul + " - дробное";
}

//Условный оператор
if (
	Number.isInteger(addition) &&
	Number.isInteger(subtraction) &&
	Number.isInteger(multiplication) &&
	Number.isInteger(division) &&
	Number.isInteger(modul)
  ) {
	operationSumOperation.innerText =
	  "Сумма всех операций: " +
	  Number(addition + subtraction + multiplication + division + modul);
	  operationSumOperation.setAttribute("style", "color: green; font-weight: 700");
  } else if (
	Number.isInteger(addition) ||
	Number.isInteger(subtraction) ||
	Number.isInteger(multiplication) ||
	Number.isInteger(division) ||
	Number.isInteger(modul)
  ) {
	operationSum.innerText = "Сумма переменных: " + addition;
	operationSum.setAttribute("style", "color: yellow; font-weight: 700");
  } else {
	test.setAttribute(
	  "style",
	  "background: url(img/bg.jpg); color: #fff"
	);
	calculatorTitle.setAttribute (
		"style",
		"color: red"
	);
	calculatorTitle.innerHTML= 'Вы ввели некорректное значение';
  }