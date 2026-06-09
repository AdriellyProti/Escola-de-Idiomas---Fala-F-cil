document.getElementById("btn-entrar").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    
    // aqui vamos verificar o perfil

    if (email === "gestor@falafacil.com" && senha === "gestor123") {
    // redireciona para o dashboard do gestor
    window.location.href = "dashboard_gestor.html";    
}
        
    else if (email === "professor@falafacil.com" && senha === "professor123") {
    // redireciona para o dashboard do professor
    window.location.href = "dashboard_professor.html";
}  

   else if (email === "aluno@falafacil.com" && senha === "aluno123") {
    // redireciona para o dashboard do gestor
    window.location.href = "dashboard_aluno.html";
}
    else {
        alert ("Usuário ou senha incorreto");
    }      

});

    