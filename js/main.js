const themeToggle = document.querySelector(".themeToggle")
const moon = document.querySelector(".fa-moon")
const sun = document.querySelector(".fa-sun")
const themeName = document.querySelector(".themeName")
const homePage = document.querySelector(".home")
const menuPage = document.querySelector(".menu")
const splashScreen = document.querySelector('.splashScreen');
const header = document.querySelector(".mainContainer header")

let body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme")

    if (body.classList.contains("dark-theme")) {
        moon.classList.add("hide")
        sun.classList.remove("hide")
        themeName.textContent = "Light"
    }
    else {
        moon.classList.remove("hide")
        sun.classList.add("hide")
        themeName.textContent = "Dark"
    }

    saveTheme();
})

function openMenuPage() {
    window.location.href = '/menu.html'
}
function closeMenuPage() {
    window.location.href = '/home.html'
}

function closeSplashScreen() {
    window.location.href = '/home.html'
}



// Local storage
function saveTheme() {
    localStorage.setItem("theme", body.classList)
}
function getTheme() {
    body.classList = localStorage.getItem("theme");

    if (body.classList.contains("dark-theme")) {
        moon.classList.add("hide")
        sun.classList.remove("hide")
        themeName.textContent = "Light"
    }
    else {
        moon.classList.remove("hide")
        sun.classList.add("hide")
        themeName.textContent = "Dark"
    }
}
getTheme();