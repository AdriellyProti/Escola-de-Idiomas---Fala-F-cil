function mostrarSecao(id) {
    let secoes = document.querySelectorAll("section");
    secoes.forEach(function(secao) {
        secao.style.display = "none";
    });
    
    document.getElementById(id).style.display = "block";
}