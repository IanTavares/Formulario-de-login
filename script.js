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

// Verifica se a senha está preenchida
if(validatePassword(passwordInput.value)){
  alert("A senha precisa ser no mínimo de 8 dígitos.");
  return;


}

// Se todos os campos estiverem corretamente preenchidos, envie o form
form.submit();
});

//Função que valida email
function isEmailValid(email){
  //cria uma regex para validar email
  const emailRegex = new RegExp(
    //usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }

return false;
}

// Função que valida a senha
function validatePassword(password, minDigits){
  if(password.length >= minDigits) {
    //Senha válida
    return true
  }

  //Senha inválida
  return false
}
