const btn = document.querySelector(".hamburger_menu");

const SiteNav = document.querySelector(".site-nav-list");

btn.addEventListener("click", () => {
SiteNav.classList.toggle("nav-open")
})