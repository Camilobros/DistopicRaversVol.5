const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const modalWhatsapp = document.getElementById('modalWhatsapp');
const linkWp1 = document.getElementById('linkWp1');
const linkWp2 = document.getElementById('linkWp2');
const closeModalBtn = document.getElementById('closeModalBtn');

// 1. Envío del formulario
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  btnText.textContent = "Transmitiendo...";
  submitBtn.disabled = true;

  // Recopilar datos ingresados
  const nombre = document.getElementById('formNombre').value;
  const alias = document.getElementById('formAlias').value || 'Sin Alias';
  const email = document.getElementById('formEmail').value;
  const motivo = document.getElementById('formMotivo').value;
  const mensaje = document.getElementById('formMensaje').value;

  const formData = new FormData(contactForm);

  try {
    
    const response = await fetch("https://formspree.io/f/xaeyapbv", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // Preparamos el texto para cuando el usuario decida tocar algún botón de WhatsApp
      const wpText = encodeURIComponent(
        `*NUEVA TRANSMISIÓN - DISTOPIC RAVERS*\n` +
        `• *Nombre:* ${nombre}\n` +
        `• *Alias:* ${alias}\n` +
        `• *Correo:* ${email}\n` +
        `• *Motivo:* ${motivo}\n` +
        `• *Mensaje:* ${mensaje}`
      );

      // Asignamos las URLs a los botones del modal con el código de país de Colombia (+57)
      linkWp1.href = `https://wa.me/573204948048?text=${wpText}`;
      linkWp2.href = `https://wa.me/573142418909?text=${wpText}`;

      // Vaciamos el formulario
      contactForm.reset();

      // Mostramos el modal en pantalla (SIN abrir pestañas automáticamente)
      modalWhatsapp.classList.remove('hidden');
      modalWhatsapp.classList.add('flex');
    } else {
      alert("Hubo un fallo al transmitir el mensaje por correo. Por favor verifica los datos o intenta más tarde.");
    }
  } catch (err) {
    alert("Error de conexión con la red al intentar enviar el formulario.");
  } finally {
    btnText.textContent = "Transmitir a la Red";
    submitBtn.disabled = false;
  }
});

// 2. Cerrar el modal con el botón
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    modalWhatsapp.classList.add('hidden');
    modalWhatsapp.classList.remove('flex');
  });
}

// 3. Cerrar el modal si el usuario hace clic fuera de la caja
window.addEventListener('click', (e) => {
  if (e.target === modalWhatsapp) {
    modalWhatsapp.classList.add('hidden');
    modalWhatsapp.classList.remove('flex');
  }
});