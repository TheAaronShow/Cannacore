//===============================
// MENU HAMBURGUESA
//===============================

window.toggleMenu = function () {

    document
        .getElementById("menu")
        .classList
        .toggle("show");

}

//===============================
// MENU DE USUARIO
//===============================

window.toggleUserMenu = function () {

    document
        .getElementById("userDropdown")
        .classList
        .toggle("show");

}

//===============================
// CERRAR MENU SI SE HACE CLICK AFUERA
//===============================

document.addEventListener("click", (e) => {

    const userMenu = document.getElementById("userMenu");
    const dropdown = document.getElementById("userDropdown");

    if (!userMenu || !dropdown) return;

    if (!userMenu.contains(e.target)) {

        dropdown.classList.remove("show");

    }

});