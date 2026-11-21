const formulario = document.querySelector("form")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const nometutor = document.getElementById("nometutor").value;
    const especie = document.querySelector("#especie").value;
    const idade = document.querySelector('input[type="number"]').value;
    if (idade == "") {
        window.alert("Não pode estar vazio")
    }
    console.log("Formulario Enviado!")
    console.log(nome)
    console.log(nometutor)
    console.log(especie)
    console.log(idade)
})