// --- HAMBURGER MENU ---
const toggleButton = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

toggleButton.addEventListener('click', () => {
  navList.classList.toggle('nav-list--visible');
});


// --- SMOOTH SCROLLING & CLOSE MOBILE NAV ON LINK CLICK ---
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    if (targetId && targetId !== '#') {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    // Close the mobile nav after a link is clicked
    navList.classList.remove('nav-list--visible');
  });
});


// --- FORM VALIDATION & AJAX SUBMISSION ---
const form = document.querySelector('#contact form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#number');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const numberValue = numberInput.value;
  const messageValue = messageInput.value;

  if (nameValue === '') {
    return alert('Name is required.');
  }
  if (nameValue.length > 20) {
    return alert('Name must be less than 20 characters.');
  }
  if (emailValue === '') {
    return alert('Email is required.');
  }
  if (!emailValue.includes('@')) {
    return alert('Please enter a valid email address.');
  }
  if (numberValue && numberValue.length !== 10) {
    return alert('Please enter a valid 10-digit number.');
  }

  const formData = {
    name: nameValue,
    email: emailValue,
    number: numberValue,
    message: messageValue
  };

  fetch('http://localhost:3000/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.text())
  .then(data => {
    alert(data);
    form.reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert(`Sorry, something went wrong. Please try again.${error}`);
  });
});


// --- ACTIVE LINK HIGHLIGHTING ---
const sections = document.querySelectorAll('section[id]');

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      const selector = `a[href="#${sectionId}"]`;
      const activelink = document.querySelector(selector);
      
      navLinks.forEach(link => {
        link.classList.remove('active-link');
      });

      if (activelink) {
        activelink.classList.add('active-link');
      }
    }
  });
};
const observerOptions = {
  rootMargin: '0px 0px -50% 0px'
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => {
  observer.observe(section);
});


// --- SCROLL TO TOP BUTTON ---
const topButton = document.querySelector('#scrollTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

topButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// --- CLOSE MOBILE NAV ON CLICK OUTSIDE ---
document.addEventListener('click', (event) => {
  const isNavVisible = navList.classList.contains('nav-list--visible');
  const isClickOnToggleButton = toggleButton.contains(event.target);
  const isClickInsideNav = navList.contains(event.target);

  if (isNavVisible && !isClickOnToggleButton && !isClickInsideNav) {
    navList.classList.remove('nav-list--visible');
  }
});