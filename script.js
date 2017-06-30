function load_Weather(location) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState === 4 && this.status === 200) {
			remove_weather();
			get_info_weather(this);
		}
	};
	xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=' +
		location + '&appid=d2b38519230871c56f58e8d0488dd75b', true);
	xmlhttp.send();
}

function load_default_Weather() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState === 4 && this.status === 200) {
			get_info_weather(this);
		}
	};

	xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=1566165&appid=d2b38519230871c56f58e8d0488dd75b', true);
	xmlhttp.send();
}

function get_info_weather(info) {
	var title_temp, min_temp, max_temp;
	var type_temp = document.createElement('LI');
	var type_temp_min = document.createElement('LI');
	var type_temp_max = document.createElement('LI');

	myObj = JSON.parse(info.responseText);
	title_temp = document.createTextNode('Nhiet do: ' +
		Math.round(myObj.main.temp - 273.15));
	min_temp = document.createTextNode('Nhiet do thap nhat: ' +
		Math.round(myObj.main.temp_min - 273.15));
	max_temp = document.createTextNode('Nhiet do cao nhat: ' +
		Math.round(myObj.main.temp_max - 273.15));

	type_temp.appendChild(title_temp);
	type_temp_min.appendChild(min_temp);
	type_temp_max.appendChild(max_temp);

	document.getElementById('weather').appendChild(type_temp);
	document.getElementById('weather').appendChild(type_temp_min);
	document.getElementById('weather').appendChild(type_temp_max);
}

function remove_weather() {
	for (var i = 0; i < 3; i++) {
		var list = document.getElementById("weather");
    list.removeChild(list.childNodes[0]);
	};
}

load_default_Weather();