function mostrarSecao(id) {
    let secoes = document.querySelectorAll("section");
    secoes.forEach(function(secao) {
        secao.style.display = "none";
    });
    
    document.getElementById(id).style.display = "block";
}

function calcularNota() {
    let notaProva = parseFloat(document.getElementById("nota-prova").value);
    let notaTrabalho = parseFloat(document.getElementById("nota-trabalho").value);
    let resultado = (notaProva + notaTrabalho) / 2;
    document.getElementById("nota-final").value = resultado;
}