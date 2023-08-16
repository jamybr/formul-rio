 document.getElementById('form').addEventListener('submit' , (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var data = document.getElementById("data").value;
    var data = document.getElementById("data").value;
    var CPF = document.getElementById("CPF").value;
    var cidade = document.getElementById("cidade").value;
    var rua = document.getElementById("rua").value;
    var numero = document.getElementById("numero").value;
    var senha = document.getElementById("senha").value;
    var repetir = document.getElementById("repetir").value;

    if (email && nome && telefone && data && CPF && cidade && rua && numero && senha && repetir) {
        if (senha === repetir) {
            alert('cadastro concluído!');
        } else {
            alert('campos das senhas nao coincidem!');
        };
    } else {
        alert('possui campos não preenchidos');
    };
});