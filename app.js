const itens = document.getElementById("itens");
const burguer_Menu = document.getElementById("burguer_Menu");
const burguer_Close = document.getElementById("burguer_Close");

function click_Burguer() {
    if (itens.classList.contains("show")) {

        itens.classList.remove("show");
        burguer_Menu.style.display = "block";
        burguer_Close.style.display = "none";
    } else {

        itens.classList.add("show");
        burguer_Menu.style.display = "none";
        burguer_Close.style.display = "block";
    }
}

document.addEventListener("click", function(event) {
    const isClickInsideMenu = itens.contains(event.target);
    const isClickOnBurguer = burguer_Menu.contains(event.target) || burguer_Close.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBurguer && itens.classList.contains("show")) {
        itens.classList.remove("show");
        burguer_Menu.style.display = "block";
        burguer_Close.style.display = "none";
    }
});
