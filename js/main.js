const buttonNightMode = document.querySelector(".dark-mode-button");

// Проверка темной темы на уровне системных настроек

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    buttonNightMode.classList.add("dark-mode-button--active");
    document.body.classList.add('night');
}

// Проверка темной темы в localStorage

if (localStorage.getItem('darkMode') === 'night') {
    buttonNightMode.classList.add("dark-mode-button--active");
    document.body.classList.add('night');
}

// Если меняются системные настройки, то меняем тему

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {
    const newColorScheme = event.matches ? "night" : 'light';

    if (newColorScheme === 'night') {
        buttonNightMode.classList.add("dark-mode-button--active");
        document.body.classList.add('night');
        localStorage.setItem("nightMode", "light");
    } else {
        buttonNightMode.classList.remove("dark-mode-button--active");
        document.body.classList.remove('night');
    }
})

// Ночной режим по кнопке
buttonNightMode.onclick = function () {
    buttonNightMode.classList.toggle("dark-mode-button--active");
    const isNight = document.body.classList.toggle('night');

    if (isNight) {
        localStorage.setItem('nightMode', 'night')
    } else {
        localStorage.setItem("nightMode", "light");
    }
}

