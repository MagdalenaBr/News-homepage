const navList = document.querySelector(".main-nav-list");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
	const visibility = navList.getAttribute("data-visible");

	if (visibility === "false") {
		navList.setAttribute("data-visible", true);
		navToggle.style.backgroundImage =
			'url("news-homepage/assets/images/icon-menu-close.svg")';
	} else if (visibility === "true") {
		navList.setAttribute("data-visible", false);
		navToggle.style.backgroundImage = 'url("news-homepage/assets/images/icon-menu.svg")';
	}
});
