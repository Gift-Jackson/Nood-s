const themeToggle = document.querySelector(".theme-btn")
const moon = document.querySelector(".dark")
const sun = document.querySelector(".light")
const themeName = document.querySelector(".themeName")
const homePage = document.querySelector(".home")
const menuPage = document.querySelector(".menu")
const splashScreen = document.querySelector('.splashScreen');
const header = document.querySelector(".mainContainer header")

let body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme")

    if (body.classList.contains("dark-theme")) {
        themeName.textContent = "light_mode"
    }
    else {
        themeName.textContent = "dark_mode"
    }

    saveTheme();
})

const menuContainer = document.querySelector(".menu__container");
const onboardingContainer = document.querySelector(".onboarding-container");
const searchIcon = document.querySelector(".searchIcon");
const searchIconSpan = document.querySelector(".srch");

function openAndCloseMenu() {
    onboardingContainer.classList.toggle("hide")
    menuContainer.classList.toggle("hide")

    if (onboardingContainer.classList.contains("hide")) {
        searchIconSpan.textContent = "close"
    }
    else {
        searchIconSpan.textContent = "search"
    }
}





// Local storage
function saveTheme() {
    localStorage.setItem("theme", body.classList)
}
function getTheme() {
    body.classList = localStorage.getItem("theme");

    if (body.classList.contains("dark-theme")) {
        themeName.textContent = "light_mode"
    }
    else {
        themeName.textContent = "dark_mode"
    }
}
getTheme();
