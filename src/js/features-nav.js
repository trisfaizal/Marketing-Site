const nav = document.getElementById("features-nav");

// listen for clicks outside the nav, and remove open class
const outsideClickListener = event => {
        if (event.target.closest("#features-nav") === null && event.target.closest("#features-nav-button") === null) {
            nav.classList.remove("open");
        }
}
document.addEventListener("click", outsideClickListener);

// listen for clicks on the button, and add open class to nav
document.getElementById("features-nav-button").addEventListener("click", () => {
    nav.classList.add("open");
});