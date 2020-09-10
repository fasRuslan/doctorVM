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