function validarFormulario() {
    var nomePessoa = document.forms["formContato"]["nome"].value;
    var telefonePessoa = document.forms["formContato"]["telefone"].value;
    var emailPessoa = document.forms["formContato"]["email"].value;
    var textMessage = document.forms["formContato"]["campo"].value;
    if (nomePessoa == "") {
        alert("Favor informar o seu nome!");
        return false;
    }
    if (telefonePessoa == "") {
        alert("Favor informar telefone!");
        return false;
    }
    if (emailPessoa == "") {
        alert("Favor informar e-mail para cadastro!");
        return false;
    }
    if (textMessage == "") {
        alert("Favor escrever sua Mensagem");
        return false;
    }
    else {
        alert("Olá, " + nomePessoa + "! Mensagem enviada com sucesso!");
        return true;
    }

}
