var a = +prompt('Введите число', '');
var b = +prompt('Введите степень', '');
var summRound = Math.round(a) + Math.round(b);
var summAB = a + b;
if (summAB % summRound == 0) {
	console.log( pow(a, b) );	
} else if (isNaN(summAB % summRound)) {
	console.log( pow(a, b) );                      
} else {
	alert('Введите целое число');
}

function pow(a, b) {
	 var result = a;

	 for (var i = 1; i < b; i++) {
	 	result *=a;
	 }

	 return result;
}


// Пример с рекурсией

// function pow(a, b) {
// 	 if (b > 1) {
// 	 	return a * pow(a, b -1);
// 	 }
// 	 return a;
// }



