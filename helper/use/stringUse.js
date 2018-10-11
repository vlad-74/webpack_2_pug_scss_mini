let str = require('../string');

var mystring = "Работа с текстом";
var int = 10;

console.log('String(int) ЭТО = ', typeof String(int));
console.log('int.toString() ЭТО = ', typeof int.toString());

//Удалить с начала
	console.log('delStart(mystring, 5) = ', str.delStart(mystring, 5));
//Удалить с конца
	console.log('delFinish(mystring, 5) = ', str.delFinish(mystring, 5));
//Удалить промежуток
	console.log('delMidl(mystring, 9, 10) = ', str.delMidle(mystring, 9, 10));
//Удалить от
	console.log('delFrom(mystring) = ', str.delFrom(mystring, 'с', 2));