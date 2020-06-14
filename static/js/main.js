/**
 * Common, site wide JavaScript functionality.
 * 
 * @author Alex Dawson
 */

(function() {
	let menu = document.getElementById('main-menu');
	let openMenuButton = document.getElementById('menu-open');
	let closeMenuButton = document.getElementById('menu-close');

	/**
	 * Display the navigation menu overlay.
	 */
	function showMenu() {
		menu.classList.add('d-flex');
		menu.classList.remove('d-none');
	}

	/**
	 * Hide the navigation menu overlay.
	 */
	function hideMenu() {
		menu.classList.add('d-none');
		menu.classList.remove('d-flex');
	}

	openMenuButton.addEventListener('click', showMenu);
	closeMenuButton.addEventListener('click', hideMenu);
}());