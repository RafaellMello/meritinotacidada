document.addEventListener('DOMContentLoaded', () => {
  const lazySections = document.querySelectorAll('section.lazy');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('lazy');



        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,       
    rootMargin: '0px 0px 200px 0px', 
    threshold: 0.4     
  });

  lazySections.forEach(section => {
    observer.observe(section);
  });
});
