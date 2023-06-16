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
      emailInput.classList.add('email-fail');

    }
  }
  function dismissMessage() {
    mainPage.style.display = 'flex';
    successPage.style.display = 'none';
  }

  // Function to handle changing the image source
function changeImageSource() {
    const imgElement = document.getElementById('illustration-img');
    const mediaQuery = window.matchMedia('(min-width: 601px)');
  
    if (mediaQuery.matches) {
      imgElement.src = './assets/images/illustration.svg';
    } else {
      imgElement.src = './assets/images/illustration-sign-up-mobile.svg';
    }
  }
  
  // Call the function initially
  changeImageSource();
  
  // Add an event listener to recheck the media query on window resize
  window.addEventListener('resize', changeImageSource);
  