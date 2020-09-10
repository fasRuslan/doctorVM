const navToggle = document.querySelector('.mobile__toggle-js')
const burgerMenu = document.querySelector('.burger__menu-list-js')

navToggle.addEventListener('click', function () {
	navToggle.classList.toggle('mobile__toggle--close')
	navToggle.classList.toggle('mobile__toggle--open')
	burgerMenu.classList.toggle('burger__menu-list--close')
	burgerMenu.classList.toggle('burger__menu-list--open')

})