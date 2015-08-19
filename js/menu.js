document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
    document.querySelector('.menu-abrir').classList.add('esconde');
};

document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
    document.querySelector('.menu-abrir').classList.remove('esconde');
};
document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};