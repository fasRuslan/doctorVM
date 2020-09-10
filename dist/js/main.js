window.addEventListener('DOMContentLoaded', () => {
	const navToggle = document.querySelector('.mobile__toggle-js')
const burgerMenu = document.querySelector('.burger__menu-list-js')

navToggle.addEventListener('click', function () {
	navToggle.classList.toggle('mobile__toggle--close')
	navToggle.classList.toggle('mobile__toggle--open')
	burgerMenu.classList.toggle('burger__menu-list--close')
	burgerMenu.classList.toggle('burger__menu-list--open')

})
	//?tabs
const tabsLink = document.querySelectorAll('.diseases-menu__item-link');
const tabs = document.querySelectorAll('.tab');

for (let i = 0; i < tabsLink.length; i++) {
	tabsLink[i].addEventListener('click', function (e) {
		e.preventDefault()
		removeClassActive(tabs)
		removeClassActiveLink(tabsLink)
		tabsLink[i].classList.add('active-link');
		tabs[i].classList.add('active')
		tabs[i].classList.add('transparency')
	})
}


function removeClassActive(elem) {
	for (let i = 0; i < elem.length; i++) {
		if (elem[i].classList.contains('active') == true) {
			elem[i].classList.remove('active');
		}
	}
}

function removeClassActiveLink(elem) {
	for (let i = 0; i < elem.length; i++) {
		if (elem[i].classList.contains('active-link') == true) {
			elem[i].classList.remove('active-link');
		}
	}
}
		//?создание карты
	//*Функция ymaps.ready() будет вызвана, когда */
	//* загрузятся все компоненты API, а также когда будет готово DOM-дерево. */
	ymaps.ready(init);

	function init() {
		// Создание карты.
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [55.76, 37.64],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 15,
			//
			controls: ['zoomControl', 'searchControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
		}, {
			searchControlProvider: 'yandex#search'

		});

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'Собственный значок метки',
			balloonContent: 'Это красивая метка'
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: '/img/logo/logo.svg',
			// Размеры метки.
			iconImageSize: [70, 60],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-5, -38]
		})

		myMap.geoObjects
			.add(myPlacemark);

	};
	console.log(1);
console.log(2);
console.log(3);
});
//# sourceMappingURL=main.js.map
