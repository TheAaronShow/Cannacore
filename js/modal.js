//===============================
// ABRIR MODAL
//===============================

function openModal(type){

    document
        .getElementById("modalBg")
        .style.display="flex";

    document
        .getElementById("loginModal")
        .style.display="none";

    document
        .getElementById("recoverModal")
        .style.display="none";

    document
        .getElementById("registerModal")
        .style.display="none";

    if(type==="login"){

        document
        .getElementById("loginModal")
        .style.display="block";

    }

    if(type==="recover"){

        document
        .getElementById("recoverModal")
        .style.display="block";

    }

    if(type==="register"){

        document
        .getElementById("registerModal")
        .style.display="block";

    }

}

//===============================
// CERRAR MODAL
//===============================

function closeModal(){

    document
        .getElementById("modalBg")
        .style.display="none";

}

//===============================
// MOFAL FUNTIONM
//===============================

window.openModal = function(type){

    document.getElementById("modalBg")
    .style.display="flex";

    document.getElementById("loginModal")
    .style.display="none";

    document.getElementById("recoverModal")
    .style.display="none";

    document.getElementById("registerModal")
    .style.display="none";

    if(type==="login")
        document.getElementById("loginModal").style.display="block";

    if(type==="recover")
        document.getElementById("recoverModal").style.display="block";

    if(type==="register")
        document.getElementById("registerModal").style.display="block";

}

window.closeModal = function(){

    document.getElementById("modalBg")
    .style.display="none";

}