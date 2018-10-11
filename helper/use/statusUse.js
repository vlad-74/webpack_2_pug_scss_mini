let sts = require('../status');

function callbackf(status, val){
	console.log(status.name + ': !eventCurrentStatus = ' + val  + ' (time: ' +  new Date(status.time).toLocaleString() + ') | oldvalue = ' + status.oldvalue + ' (oldtime: ' + new Date(status.oldtime).toLocaleString() + ')');
}

let statuses = ['status_body','status_current_page', 'status_current_lng', 'status_current_flg'];

//ЦИКЛОМ СОЗДАЕМ СТАТУСЫ С ИМЕНАМИ ИЗ МАССИВА
statuses.map(item => sts.create_status(item, callbackf)); 

//В СТАТУСАХ ЦИКЛОМ ИЗМЕНЯЕМ ИХ currentStatus
statuses.map(item => global[item].currentStatus = "open");

console.log('СТАТУС ДО', global[statuses[1]].currentStatus === "изменение");

setTimeout(function(){ 
	global[statuses[1]].currentStatus ="изменение"; 
	console.log('СТАТУС ПОСЛЕ', global[statuses[1]].currentStatus === "изменение");
}, 2000);
