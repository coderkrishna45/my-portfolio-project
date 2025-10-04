const toggleButton = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
toggleButton.addEventListener('click' , ()=>{
   navList.classList.toggle('nav-list--visible');
});
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const form = document.querySelector('#contact form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === '') {
    alert('Name is required.');
  } else if (nameValue.length > 20) {
    alert('Name must be less than 20 characters.');
  } else if (emailValue === '') {
    alert('Email is required.');
  } else if (!emailValue.includes('@')) {
    alert('Please enter a valid email address with @.');
  } else {
    alert('Form submitted successfully!');
  }
});
const sections=document.querySelectorAll('section[id]');
const observerCallback=(entries)=>{
 
};
const observer=new IntersectionObserver(observerCallback);
sections.forEach(section=>{
      observer.observe(section);
});