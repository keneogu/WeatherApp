import './css/style.scss';
import getResult from './js/weather';
import displayWeather from './js/background';
import changeTemp from './js/temp';

const search = document.querySelector('.search-box');
search.addEventListener('keypress', setAction);

function setAction(e) {
	if(e.keyCode == 13) {
		getResult(search.value)
		.then(data => displayWeather(data));
	}
}
changeTemp();