//Recogo el DOM
var boton_menu = document.getElementById("boton_menu");
var img_menu = document.getElementById("img_menu");
var nav = document.getElementById("nav");

//bandera
var activo = true;

//Esto escucha cuando el boton para abrir el menú del header sea clickeado
boton_menu.addEventListener("click", () => {
    boton_menu.classList.toggle('hacerAnimacion');
    
    //toggle style
    if (activo) {
        img_menu.style.opacity = 0;
        nav.style.transform = 'translateY(0%)';
        activo = false;
    } else {
        img_menu.style.opacity = 1;
        nav.style.transform = 'translateY(-100%)';
        activo = true;
    }
});