const formCadastrar = document.getElementById("form-cadastrar")

if (form_cadastar) {
    form_cadastar.addEvetentListener("submit", function (event) {
        event.preventDeFault()

        const usuario = {
            nome: document.getElementById("nome").value,
            sobrenome: document.getElementById("sobrenome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value,
            ddd: document.getElementById("ddd ").value,
            telefone: document.getElementById("telefone").value,
            endereco: document.getElementById("endereco").value,
            Numero: document.getElementById("Numero").value,
            Cidade: document.getElementById("Cidade").value,
            cep: document.getElementById("cep").value,
            dataNascimento: document.getElementById("data-nascimento").value,
            genero: document.getElementById("genero").value,

        }
        localStorage.setItem("usuarioCadastrado" JSON, stringify(usuario)
alert("cadastro Realizado com SUCESSO!")
window.location.href = "login.html"
        )


    })
}
//parte de login

const FORM_LOGAR = document.getElementById("form-logar")
if(FORM_LOGAR){
    FORM_LOGAR.addEventDeFault()
    const usuariousuarioCadastrado=localStorage.getItem("usuarioCadastrado")
 if (usuarioCadastrado){
    constusuarioEncontrado=JSON.parse(usuarioCadastrado)
    var emilDigitado=  getElementById("email"). value
    var senhadigitada=  getElementById("senha"). value
    
    if( emailDigitado == usuarioEncontado.email && senhaDigitada ==usuarioEncontrado.senha){
 
alert ("usuario encontado com sucesso!!")
window.location.href= "index.html"}
else {
    alert( "atenção: email ou senha incorretos")
}else{
    alert( "nenhum usuario encontado")
}

}}