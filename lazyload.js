document.addEventListener('DOMContentLoaded', () => {
  const lazyElements = document.querySelectorAll('.lazy');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log('Observed:', entry.target); // <-- teste
      if (entry.isIntersecting) {
        entry.target.classList.remove('lazy');
        entry.target.classList.add('lazy-loaded');
        observer.unobserve(entry.target);
        console.log('Loaded:', entry.target); // <-- teste
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px 00px 0px',
    threshold: 0.7
  });

  lazyElements.forEach(el => observer.observe(el));
});
