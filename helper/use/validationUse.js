let vld = require('../validation');

console.log('\n\nСтроковое преобразование: String(true) === "true" - ', String(true) === "true"); // true
console.log('Числовое преобразование: Number(true) === 1 - ', Number(true) === 1); // true
console.log('Логическое преобразование: Boolean(0) === false - ', Boolean(0) === false); // true

console.log('\ntypeof undefined - ', typeof undefined)// "undefined"
console.log('typeof 0  - ', typeof 0 )// "number"
console.log('typeof true - ', typeof true) // "boolean"
console.log('typeof "foo" - ', typeof "foo") // "string"
console.log('typeof {} - ', typeof {}) // "object"
console.log('typeof [] - ', typeof []) // "object"
console.log('typeof null - ', typeof null )// "object"(null == "object"–это официально признанная ошибка)
console.log('typeof function(){} - ', typeof function(){}) // "function"

console.log('\nvld.classof(null) = ', vld.classof(null) ) // => "Null"
console.log('vld.classof(1) = ', vld.classof(1) )// => "Number"
console.log('vld.classof("str") = ', vld.classof("str")) // => "String"
console.log('vld.classof(false) = ', vld.classof(false)) // => "Boolean"
console.log('vld.classof({}) = ', vld.classof({})) // => "Object"
console.log('vld.classof([]) = ', vld.classof([]) )// => "Array"
console.log('vld.classof(/./) = ', vld.classof(/./)) // => "Regexp"
console.log('vld.classof(new Date()) = ', vld.classof(new Date())) // => "Date"
// console.log('vld.classof(window) = ', vld.classof(window)) // => "Window" (объект клиентской среды выполнения)
// console.log('vld.classof(new f()) = ', vld.classof(new f())); // => "Object"


console.log('\nundefined == undefined это ', undefined === undefined) ; // true
console.log('true == true это ', true === true) ; // true
console.log('null == null это ', null === null) ; // true
console.log('"foo" == "foo" это ', "foo" === "foo") ; // true
console.log('"1" == 1 это ', "1" == 1) ; // true
console.log('"1" === 1 это !!!', "1" === 1) ; //false
console.log('{} == {} это ', {} == {}) ; //false
console.log('[] == [] это ', [] == []) ; //false
console.log('JSON.stringify([]) == JSON.stringify([]) это ', JSON.stringify([]) == JSON.stringify([]) ); // true

console.log('\nNaN == NaN это ', NaN == NaN); //false
console.log('isNaN(NaN) это ', isNaN(NaN)); // true

console.log('\nvld.isEmpty(undefined) это ', vld.isEmpty(undefined)) ; // true
console.log('vld.isEmpty(null) это ', vld.isEmpty(null)) ; // true
console.log('vld.isEmpty(NaN) это ', vld.isEmpty(NaN))  ; // true
console.log('vld.isEmpty(" ") это ', vld.isEmpty(" ") ) ; // true
console.log('vld.isEmpty([]) это ', vld.isEmpty([]) ) ; // true
console.log('vld.isEmpty({}) это ', vld.isEmpty({}) ) ; // true
console.log('vld.isEmpty(false) это ', vld.isEmpty(false) ) ; //false
console.log('vld.isEmpty([1]) это ', vld.isEmpty([1]) ) ; //false
console.log('vld.isEmpty({id:"333"}) это ', vld.isEmpty({id:"333"}) ) ; //false
console.log('vld.isEmpty(" trtr ") это ', vld.isEmpty(" trtr ") ) ; //false
console.log('vld.isEmpty(333) это ', vld.isEmpty(333) ) ; //false