function start() {
	//По нажатию на кнопку наш таймер начнет работать:
	window.setInterval(timer, 1000);
}

//Эта функция будет запускаться каждую секунду
function timer() {
	const elem = document.querySelector("#test");
	elem.value = parseInt(elem.value)+1; //parseInt преобразует строку в число
}