const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const modalWhatsapp = document.getElementById('modalWhatsapp');
const linkWp1 = document.getElementById('linkWp1');
const linkWp2 = document.getElementById('linkWp2');

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
        // Reemplaza "TU_ID_DE_FORMSPREE" por el código de tu cuenta en Formspree
        const response = await fetch("https://formspree.io/f/xaeyapbv", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // Redactar mensaje para WhatsApp codificado para URL
            const wpText = encodeURIComponent(
                `*NUEVA TRANSMISIÓN - DISTOPIC RAVERS*\n` +
                `• *Nombre:* ${nombre}\n` +
                `• *Alias:* ${alias}\n` +
                `• *Correo:* ${email}\n` +
                `• *Motivo:* ${motivo}\n` +
                `• *Mensaje:* ${mensaje}`
            );

            // Crear enlaces a los dos números
            const urlWp1 = `https://wa.me/573142418909?text=${wpText}`;
            const urlWp2 = `https://wa.me/573204948048?text=${wpText}`;

            linkWp1.href = urlWp1;
            linkWp2.href = urlWp2;

            // Abrir la primera línea en una pestaña nueva
            window.open(urlWp1, '_blank', 'noopener,noreferrer');

            // Mostrar modal con accesos directos
            modalWhatsapp.classList.remove('hidden');
            contactForm.reset();
        } else {
            alert("Hubo un error al transmitir el mensaje. Intenta de nuevo.");
        }
    } catch (err) {
        alert("Error de red al conectar con el servidor.");
    } finally {
        btnText.textContent = "Transmitir a la Red";
        submitBtn.disabled = false;
    }
});