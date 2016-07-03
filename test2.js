'use strict'
// function lol(n) {
// 	var result = n;

// 	for (n; n > 1; n--) {
// 		result *= (n-1);
// 	}
// 	return result;
// }
// var pop = 4;
// alert(lol(pop));

// var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
// var target = "Иа"; // цель поиска

// var pos = 0;
// while (true) {
//   var foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( foundPos ); // нашли на этой позиции
//   pos = foundPos + 1; // продолжить поиск со следующей
// }

// function checkSpam(str) {
//   var lowerStr = str.toLowerCase();

//   return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
// }

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );
// "use strict";

// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// alert(summ(salaries));


// function summ(salaries) {
// 	var result = 0;

// 	for (var key in salaries) {
// 		if (salaries[key] === undefined) {
// 		return result;
// 	}
// 		result += salaries[key];
// 	}
// 	return result;
// }

// "use strict";

// var salaries = {
 
// };

// var sum = 0;
// for (var name in salaries) {
//   sum += salaries[name];
// }
// debugger;
// alert( sum );

// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }

// function multiplyNumeric(obj) {
//   for (var key in obj) {
//     if (isNumeric(obj[key])) {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);
// debugger;
// alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

// var styles = ['djaz', 'bluz'];
// styles.push('rock-n-roll');
// styles[styles.length - 2] = 'Klassika';
// alert( styles.shift() );
// styles.unshift('Rap', 'Reggi');
// console.log(styles);

// var arr = [];


// while (true) {
// 	var number = prompt('write numer', '');
// 	if (number === '' || number === null || isNaN(number)) break;
// 	arr.push(+number);
// }

// var result = 0;

// for (var i = 0; i < arr.length; i++) {
// 	result += arr[i];
// }

// alert( result );

// var arr = ["test", 2, 1.5, false];

// function find(arr, value) {
// 	// for (var i = 0; i < arr.length; i++) {
// 	// if (value == arr[i]) {
// 	// 	return alert(i);
		
// 	// }
		
// 	// }
// 	// alert('-1');
// 	return arr.indexOf(2);
// }

// find(arr, 0);

// var arr = [5, 4, 3, 8, 0];

// var shadow = [];

// function filterRange(arr, a, b) {
// 	 var one = arr.indexOf(a);
// 	 var two = arr.indexOf(b) +1;
// 	 shadow = arr.slice(one, two);
// }

// filterRange(arr, 4, 8)
// alert(shadow);

/*var obj = {
  className: 'open menu'
}

function addclass(obj, cls) {
	 var str = obj.className;
	 
	 var number = str.indexOf(cls);
	 var space = cls.indexOf('');
	 if ( ~str.indexOf(cls) &&  ~cls.indexOf('')) {
	    return str;
	 }	return obj.className = str + " " + cls;
	 // if(number >= 0) {
	 // 	return string + cls;
	 // } return string;
}
alert(addclass(obj, ' '));
alert(addclass(obj, 'menu'));
alert(addclass(obj, 'lil'));
alert(obj.className);*/

/*function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return; // класс уже есть
  }

  classes.push(cls); // добавить

  obj.className = classes.join(' '); // и обновить свойство
}

var obj = {
  className: 'open menu'
};

addClass(obj, '    ');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className) // open menu new me*/

// camelize("background-color") ;

// function camelize(str) {
// 	 while (true) {
// 	 	var k = 0;
// 	 	var n = str.indexOf('-', k);
	 	
// 	 	if (n < 0) {
//   			return str;
// 	 	}

// 	 	var x = str.slice(n+1, n+2);
// 	 	var o = x.toUpperCase();
// 	 	var str = str.slice(0, n) + o + str.slice(n+2);
// 	 	k = n +1;
// 	 }
// }

// alert( camelize("-webkit-transition") );

// var obj = {
//   className: 'open menu',
//   klass : 'menu lil menu menu'
// };

/*function removeClass(obj, cls) {
	var x = cls.length;
	 for (var key in obj) {
	 	while (true) {
	 		var y = obj[key].indexOf(cls);
	 		if (y < 0) {
	 		 break;
	 	} else if (y == 0) {
	 		var w = obj[key].slice(y+x);
	 		obj[key] = w;
	 		var z = y +1;
	 	} else {
	 		var k = obj[key].slice(0, y - 1);
	 		var w = obj[key].slice(y+x);
	 		obj[key] = k + w;
	 		var z = y +1;
	 	}
	 	}
	 	// return obj[key];
	 }
}

removeClass(obj, 'menu');
alert( obj.className );
alert( obj.klass );*/


// var arr = [5, 3, 8, 9, 1, 7, 10,11,0];

// function filter(arr, a, b) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (+arr[i] < a || +arr[i] > b) {
// 			arr.splice(i, 1);
// 			i--;
// 		}
		
		
// 	}
// }

// filter(arr, 1, 4);
// alert( arr );

// var arr = [5, 2, 1, -10, 8];

// // отсортируйте?



// arr.sort(fn);
// function fn(a,b) {
// 	 return b - a;
// }

// alert( arr ); // 8, 5, 2, 1, -10


// var arr = ["HTML", "JavaScript", "CSS"];

// var arrSorted = arr.concat();
// arrSorted.sort();

// // function compareFunction(a, b) {
// // 	 return a > b;
// // }

// alert( arrSorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// Наша функция сравнения
// function compareAge(personA, personB) {
//   return personA.age - personB.age;
// }

// // проверка
// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };

// var people = [ vasya , masha , vovochka ];

// people.sort(compareAge);

// // вывести
// for(var i = 0; i < people.length; i++) {
// 	debugger;
//   alert(people[i].name); // Вовочка Маша Вася
// }

// var list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       }
//     }
//   }
// };

// function print(list) {
// 	 var tmp = list;

// 	 while (tmp) {
// 		alert(tmp.value);
// 		tmp = tmp.next;
// 	 }
// }

// print(list);

// function aclean(arr) {
//   // этот объект будем использовать для уникальности
//   var obj = {};

//   for (var i = 0; i < arr.length; i++) {
//     // разбить строку на буквы, отсортировать и слить обратно
//     var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)

//     obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
//   }

//   var result = [];

//   // теперь в obj находится для каждого ключа ровно одно значение
//   for (var key in obj) result.push(obj[key]);

//   return result;
// }

// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор", "гробик", "костер",'kjk,tyt', 'dsfg'];

// alert( aclean(arr) );



// var strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", "8-()"
// ];

// function unique(strings) {
// 	 var result = [];

// 	 Nextstr:
// 	 for (var i = 0; i < strings.length; i++) {
// 	 	var str = strings[i];

// 	 	for (var k =0; k < result.length; k++) {
// 	 		if (result[k] == str) continue Nextstr; 
// 	 	}
// 	 	result.push(str);
// 	 }
// 	 return result;
// }

// alert( unique(strings) );

// function showWarning(options) {
//   var width = options.width || 200; // по умолчанию
//   var height = options.height || 100;

//   var contents = options.contents || "Предупреждение";

//   // ...
// }

// showWarning({
//   contents: "Вы вызвали функцию" // и всё понятно!
// });

// var opts = {
//   width: 400,
//   height: 200,
//   contents: "Текст"
// };

// showWarning(opts);

// opts.contents = "Другой текст";

// showWarning(opts); // вызвать с новым текстом, без копирования других аргументов
// debugger;

// function sum(a, b, v, g, d) {
// 	 var result = 0;

// 	 for (var i = 0; i < arguments.length; i++) {
// 	 	result += arguments[i];
// 	 }

// 	 return result;
// }

// alert(sum(1, 3, 10, 4, 2))

// var arr = [1, 2, 3, 4, 5]

// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(sum, current) {
//   return sum + current;
// },2);

// alert( result ); // 15
// var t0 = performance.now();
// doSomething();
// var t1 = performance.now();
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")


// var arr = [];
// var result = [];
// var t0 = performance.now();
// arr.reduce(function (sum, current) {
// 	var res = sum + current;	 
// 	result.push(res);
// 	return sum + current;
// }, 0);
// var t1 = performance.now();
// alert(result);
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
var t0 = performance.now();
var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
  for (var key in arr) arr[key]++;
}

function walkLength(arr) {
  for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
  for (var i = 0; i < 10000; i++) f(arr);
}
 var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
console.time("All Benchmarks");

console.time("walkIn");
bench(walkIn);
console.timeEnd("walkIn");

console.time("walkLength");
bench(walkLength);
console.timeEnd("walkLength");

console.timeEnd("All Benchmarks");
