document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (event) => {
      document.querySelector('.nav-links').classList.remove('active');
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        event.preventDefault();
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 10; // 10px buffer override
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });