//===============================
// MENU HAMBURGUESA
//===============================

function toggleMenu(){

    document
        .getElementById("menu")
        .classList
        .toggle("show");

}

//===============================
// MENU DE USUARIO
//===============================

function toggleUserMenu(){

    document
        .getElementById("userDropdown")
        .classList
        .toggle("show");

}

//===============================
// CERRAR MENU SI SE HACE CLICK AFUERA
//===============================

document.addEventListener("click",(e)=>{

    const userMenu =
    document.getElementById("userMenu");

    const dropdown =
    document.getElementById("userDropdown");

    if(!userMenu) return;

    if(
        !userMenu.contains(e.target)
    ){

        dropdown.classList.remove("show");

    }

});

//===============================
// TIGGLEMENU FUNTION
//===============================

window.toggleMenu = function(){

    document
        .getElementById("menu")
        .classList
        .toggle("show");

}

window.toggleUserMenu = function(){

    document
        .getElementById("userDropdown")
        .classList
        .toggle("show");

}