const html = document.documentElement;

const modeToggler = document.getElementById("mode-toggler");

const themeFromLocalStorage = localStorage.getItem("theme");

if (themeFromLocalStorage) {
  html.dataset.theme = themeFromLocalStorage;
}

 modeToggler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme == "light" ? "dracula" : "light";
  localStorage.setItem("theme", html.dataset.theme);
});
