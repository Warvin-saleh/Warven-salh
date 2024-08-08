window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 20) { // Adjust this value as needed
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

