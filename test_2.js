var countPrompt = 5;
var arr = [];

for (var i = 0; i < countPrompt; i++) {
	var name = prompt('Введите любое имя', '');
	arr.push(name);
}


var userName = prompt('Введите имя пользователя', '');

function searchName(str) {
	 for (var key in arr) {
	 	if (userName == arr[key]) {
	 		return userName + ', вы успешно вошли';
	 	}
	 }

	 return 'Имя пользователя не существует, попробуйте еще';
}

alert( searchName(userName) );