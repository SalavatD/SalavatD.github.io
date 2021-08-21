const buttonToggleMode = document.querySelector(".button-toggle-mode")

buttonToggleMode.addEventListener("click", function () {
  if (document.body.classList.contains("white-theme")) {
    document.body.classList.remove("white-theme");
    document.body.classList.add("dark-theme");
    buttonToggleMode.textContent = "Светлая тема";
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("white-theme");
    buttonToggleMode.textContent = "Тёмная тема";
  }
});
