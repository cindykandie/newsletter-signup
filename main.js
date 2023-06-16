let errorSpan = document.getElementById('email-error');
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let mainPage = document.querySelector('.main-page')
let successPage = document.querySelector('.success-page');
let successEmailSpan = document.querySelector('.success-email');



function validateEmail() {
    let emailInput = document.getElementById('email');
    let email = emailInput.value;

    if (emailRegex.test(email)) {
      errorSpan.style.display = 'none';
      successEmailSpan.textContent = email;

      mainPage.style.display = 'none';
      successPage.style.display = 'flex';
      emailInput.value = '';
    } 
    else {
      errorSpan.style.display = 'flex';
    }
  }
  function dismissMessage() {
    mainPage.style.display = 'flex';
    successPage.style.display = 'none';
  }