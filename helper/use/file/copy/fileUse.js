let fil = require('../../file.js');


// Читать файл (путь указывается по другому)
let rf = fil.readFileSync(__dirname + '/addContent.json')
console.log('fil.readFileSync - Контент из файла : ' + '\n' + rf + '\n');

// fil.readFileAsync('../file/addContent.json')
// console.log('fil.readFileAsync - Контент из файла :');

var linenumber = 0;
fil.readFileLineByLine(__dirname + '/addContent.json', function(line) {
    console.log('fil.readFileLineByLine ' + ++linenumber + " -- " + line);
});

//Удаляем файл
fil.deleteFile(__dirname + '/new.json');
console.log('Удаляем файл new.json' );

//Создание и запись в файл
fil.createOrClearAndWrite (__dirname + '/new.json', '1 Этого файла не было;\n2 И этой записи тоже не было !!!');
console.log('Создание и запись в файл' );

//Перезапись в файле
fil.createOrClearAndWrite (__dirname + '/assets.json', 'фигня номер 2');
console.log('Перезапись в файле' );

//Добавить контент в конец файла
fil.appendToFile (__dirname + '/addContent.json', '\nСтрока статическая (добавленная)');
console.log('Добавить контент в конец файла' );

//Копировать файл
fil.copyFile (__dirname + '/addContent.json', __dirname + '/addContent2.json');
console.log('Копировать файл' );

//КОПИРОВАНИЕ ФАЙЛОВ ИЗ ПАПКИ file В ПАПКУ file/copy, С ПРЕДВАРИТЕЛЬНЫМ УДАЛЕНИЕМ ПАПКИ file/copy
fil.deleteDirectoryPromise(__dirname + '/copy');  //удаляю папку copy
console.log('удаляю папку copy' );

setTimeout(function(){
	fil.AsynchronousMkdir(__dirname + '/copy');//Создаю папку
	console.log('Создаю папку' );

	let tt = fil.choiceAllFilesFromFolder(__dirname,'path');
	console.log('\nВСЕ ФАЙЛЫ В ТЕКУЩЕЙ ПАПКЕ (смотри путь в командной сроке ПЛЮС путь в переменной) :\n', tt);

	let filefrom = tt.map(item => item.replace(/\|/, '/'));
	filefrom = filefrom.map(item => item.replace(/\.\.\/\.\.\//, ''));

	console.log('\n', filefrom);

	let fileTo = tt.map(item => item.replace(/\|/, '/copy/'));
	fileTo = fileTo.map(item => item.replace(/\.\.\/\.\.\//, ''));

	console.log('\n',fileTo);

	for(var i=0; i < tt.length; i++){
		fil.copyFile (filefrom[i], fileTo[i]);
	}
}, 1000);