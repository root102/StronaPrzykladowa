document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const burgerMeni = document.querySelector('.navbar-collapse');
	const navLink = document.querySelectorAll('.navlink');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	function burgerMeniToHide() {
		burgerMeni.classList.remove('show');
	}

	window.addEventListener('scroll', addShadow);
	navLink.addEventListener('click', burgerMeniToHide);
});
