/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*==================Scroll reveal animation===========*/
const sr = ScrollReveal({
origin:'top',
distance:'60px',
duration:2500,
delay:400,
})


sr.reveal('.home__data,.footer__container,footer__group')
sr.reveal('.home__img',{delay:700,origin:'bottom'})
sr.reveal('.logos__img,.program__card,.pricing__card',{interval:100})
sr.reveal('.choose__img,.calculate__content',{origin:'left'})
sr.reveal('.choose__content,calculate__img',{origin:'right'})


/*===============CALCULATE JS-=============*/
const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const calculateMessage = document.getElementById('calculate-message');

function calculateBMI(e) {
  e.preventDefault();

  if (calculateCm.value === '' || calculateKg.value === '') {
    calculateMessage.classList.remove('color-green');
    calculateMessage.classList.add('color-red');
    calculateMessage.textContent = 'Fill in the height and weight';

    setTimeout(() => {
      calculateMessage.textContent = '';
    }, 3000);
  } else {
    const cm = calculateCm.value / 100;
    const kg = calculateKg.value;
    const bmi = Math.round(kg / (cm * cm));

    if (bmi < 18.5) {
      calculateMessage.classList.remove('color-red');
      calculateMessage.classList.add('color-green');
      calculateMessage.textContent = `Your BMI is ${bmi} and you are underweight`;
    } else if (bmi < 25) {
      calculateMessage.classList.remove('color-red');
      calculateMessage.classList.add('color-green');
      calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`;
    } else {
      calculateMessage.classList.remove('color-green');
      calculateMessage.classList.add('color-red');
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`;
    }

    calculateCm.value = '';
    calculateKg.value = '';

    setTimeout(() => {
      calculateMessage.textContent = '';
    }, 4000);
  }

}
calculateForm.addEventListener('submit', calculateBMI);
/*========alert message for subscription========*/

const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email-input');
const alertMessage = document.getElementById('alert-message');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (emailInput.value.trim() === '') {
    displayAlert('Please enter a valid email address', 'color-red');
  } else {
    displayAlert('Thank you for subscribing!', 'color-green');
    // Reset the form
    contactForm.reset();
  }
});

function displayAlert(message, colorClass) {
  alertMessage.textContent = message;
  alertMessage.classList.add(colorClass);
  alertMessage.style.display = 'block';

  setTimeout(function() {
    alertMessage.textContent = '';
    alertMessage.classList.remove(colorClass);
    alertMessage.style.display = 'none';
  }, 3000);
}


