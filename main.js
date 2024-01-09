let burger = 0

function mostraTexto(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}
function BurgerContador() {
    let burgerTxt = burger == 0 ? "Hamburger" : "Hamburgers";
    burger++
    mostraTexto(".contador", `Você possui ${burger} ${burgerTxt}`);
}


mostraTexto(".contador", `Você possui ${burger} Hamburgers`);

