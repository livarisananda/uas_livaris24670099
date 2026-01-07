const tentangSection = document.querySelector(".tentang-section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tentangSection.classList.add("active");
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(tentangSection);
