const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion-header");
const menuLinks = document.querySelectorAll(".menu-link");

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
// fim função mudar Tema do site

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");

    })
})

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.getElementById('menuHamburger');
    const menuMobile = document.getElementById('menuMobile');
    const menuLinks = document.querySelectorAll('#menuMobile .menu-link'); // Pega todos os links dentro do menu mobile

    // Função para alternar a visibilidade do menu
    function toggleMenu() {
        menuMobile.classList.toggle('active');
    }

    // Event listener para o botão de hambúrguer
    if (menuHamburger) {
        menuHamburger.addEventListener('click', toggleMenu);
    }

    // Fechar o menu ao clicar em um link (para navegação suave)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuMobile.classList.remove('active'); // Remove a classe 'active' para fechar o menu
        });
    });

    // Função para alternar o tema (mantendo o seu código existente)
    const toggleThemeButton = document.getElementById('toggleTheme');
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                toggleThemeButton.classList.remove('bi-sun');
                toggleThemeButton.classList.add('bi-moon');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                toggleThemeButton.classList.remove('bi-moon');
                toggleThemeButton.classList.add('bi-sun');
            }
        });
    }
});