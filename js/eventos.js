document.addEventListener('DOMContentLoaded', () => {
  // 1. Obtener todas las tarjetas de eventos pasados
  const pastEventCards = document.querySelectorAll('.past-event-card');
  if (pastEventCards.length === 0) return;

  // 2. Configurar el observador de intersección (IntersectionObserver)
  // Umbral 0.35: se activa cuando al menos el 35% de la tarjeta es visible en la pantalla
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.35
  };

  const eventObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const card = entry.target;
      const video = card.querySelector('.event-video');

      if (entry.isIntersecting) {
        // --- EL USUARIO ESTÁ VIENDO ESTE EVENTO ---
        // A. Reproducir video
        if (video) {
          video.play().catch(error => {
            // Manejo de restricciones de reproducción automática del navegador
            console.log('Autoplay en espera:', error);
          });
        }
        // B. Iniciar cambio automático de fotos
        startPhotoSlider(card);
      } else {
        // --- EL EVENTO SALIÓ DE LA PANTALLA ---
        // A. Pausar video para ahorrar datos y batería
        if (video) {
          video.pause();
        }
        // B. Detener cambio de fotos
        stopPhotoSlider(card);
      }
    });
  }, observerOptions);

  // 3. Vincular cada tarjeta al observador
  pastEventCards.forEach(card => {
    eventObserver.observe(card);
  });

  // 4. Lógica de rotación de fotografías del carrusel
  function startPhotoSlider(card) {
    if (card.carouselTimer) return; // Ya está corriendo

    const slides = card.querySelectorAll('.carousel-slide');
    if (slides.length <= 1) return; // No hay suficientes fotos para rotar

    let currentIndex = parseInt(card.dataset.currentSlide || '0', 10);

    // Cambia de foto cada 2800 ms (2.8 segundos)
    card.carouselTimer = setInterval(() => {
      // Ocultar foto actual
      slides[currentIndex].classList.remove('opacity-100', 'z-10');
      slides[currentIndex].classList.add('opacity-0', 'z-0');

      // Pasar al siguiente índice
      currentIndex = (currentIndex + 1) % slides.length;

      // Mostrar foto nueva con transición fluida
      slides[currentIndex].classList.remove('opacity-0', 'z-0');
      slides[currentIndex].classList.add('opacity-100', 'z-10');

      card.dataset.currentSlide = currentIndex;
    }, 2800);
  }

  function stopPhotoSlider(card) {
    if (card.carouselTimer) {
      clearInterval(card.carouselTimer);
      card.carouselTimer = null;
    }
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const pastEventCards = document.querySelectorAll('.past-event-card');
  if (pastEventCards.length === 0) return;

  // 1. Selector de videos (cambiar entre clips)
  pastEventCards.forEach(card => {
    const video = card.querySelector('.event-video');
    const chips = card.querySelectorAll('.video-chip');

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const newSrc = chip.getAttribute('data-src');
        if (video && newSrc && video.src !== newSrc) {
          video.src = newSrc;
          video.currentTime = 0;
          video.muted = false; // Sonido activado
          video.play().catch(() => {
            video.muted = true;
            video.play();
          });
        }
      });
    });
  });

  // 2. Autoplay y reproducción al hacer scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.35
  };

  const eventObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const card = entry.target;
      const video = card.querySelector('.event-video');

      if (entry.isIntersecting) {
        if (video) {
          // Intenta reproducir con sonido activado
          video.muted = false;
          video.play().catch(() => {
            // Respaldo: los navegadores exigen silencio en el primer autoplay si no hubo interacción
            video.muted = true;
            video.play();
          });
        }
        startPhotoSlider(card);
      } else {
        if (video) {
          video.pause();
        }
        stopPhotoSlider(card);
      }
    });
  }, observerOptions);

  pastEventCards.forEach(card => eventObserver.observe(card));

  // 3. Rotación de fotos
  function startPhotoSlider(card) {
    if (card.carouselTimer) return;
    const slides = card.querySelectorAll('.carousel-slide');
    if (slides.length <= 1) return;

    let currentIndex = parseInt(card.dataset.currentSlide || '0', 10);

    card.carouselTimer = setInterval(() => {
      slides[currentIndex].classList.remove('opacity-100', 'z-10');
      slides[currentIndex].classList.add('opacity-0', 'z-0');

      currentIndex = (currentIndex + 1) % slides.length;

      slides[currentIndex].classList.remove('opacity-0', 'z-0');
      slides[currentIndex].classList.add('opacity-100', 'z-10');

      card.dataset.currentSlide = currentIndex;
    }, 2800);
  }

  function stopPhotoSlider(card) {
    if (card.carouselTimer) {
      clearInterval(card.carouselTimer);
      card.carouselTimer = null;
    }
  }
});