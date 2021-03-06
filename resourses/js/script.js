/*
* init application
* */


var baseURL = location.origin,
	jsonPath = baseURL + '/dest/data/characters.json',
	container = document.querySelector('#game');

getJSON = function(url) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('get', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
			var status = xhr.status;
			if (status == 200) {
				resolve(xhr.response);
			} else {
				reject(status);
			}
		};
		xhr.send();
	});
};

var App = new Game(container,{
	'url'	: jsonPath
});