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