var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus',()=>{
  email.style.borderColor = "#4a5f6a"; 
});

email.addEventListener('blue',()=>{
  email.style.borderColor = "#ccc"; 
});

password.addEventListener('focus',()=>{
  password.style.borderColor = "#4a5f6a"; 
});

password.addEventListener('blue',()=>{
  password.style.borderColor = "#ccc"; 
});