document.addEventListener("DOMContentLoaded", function() {
  const btnCadastrar = document.querySelector(".btn-cadastrar");
  const formCadastro = document.getElementById("formCadastro");
  const meuFormulario = document.getElementById("meuFormulario");
  const dadosSalvos = document.getElementById("dadosSalvos");
  btnCadastrar.addEventListener("click", function() {
    formCadastro.style.display = "block";
  });
  meuFormulario.addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const novoDado = document.createElement("div");
    novoDado.innerHTML = `<strong>Nome:</strong> ${nome} <br>
                          <strong>CPF:</strong> ${cpf} <br>
                          <strong>Data:</strong> ${data} <br>
                          <strong>Hora:</strong> ${hora}`;
    dadosSalvos.appendChild(novoDado);
    meuFormulario.reset();
  });
});