const nameInput = document.querySelector("#name")
const form = document.querySelector("#form")
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");


form.addEventListener("submit", (event) => {
  event.preventDefault();


//Verifica se o nome está vazio
if (nameInput.value === "") {
  alert("Por favor, preencha o seu nome");
  return
}

// Verifica se o email está preenchido e se é válido
if (emailInput.value === ""){
  alert("Por favor, preencha o seu email");
  return;
}

// Se todos os campos estiverem corretamente preenchidos, envie o form
form.submit();
});

//Função que valida email
function isEmailValid(email){

  //cria uma regex para validar email
  const emailRegex = new RegExp(
    //usuario12
    /^[a-zA-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]/
  )


}