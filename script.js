 const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

   function openLightbox(card) {
    const imgSrc = card.querySelector('img').src;
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox').style.display = "block";
  }
  function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
  }

  let slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }

  setInterval(showSlide, 5000);