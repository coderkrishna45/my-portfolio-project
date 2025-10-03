const toggleButton = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
toggleButton.addEventListener('click' , ()=>{
   navList.classList.toggle('nav-list--visible');
});
