document.addEventListener('DOMContentLoaded', () => {
  const footerContainer = document.getElementById('main-footer');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <!-- FOOTER / SECCIÓN DE CONTACTO -->
    <footer class="border-t-2 border-yellow-400 bg-black/95 py-8 px-4 mt-16">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <!-- Marca de Contacto -->
        <div>
          <a href="/htmls/contactanos.html" class="font-graffiti text-3xl text-yellow-400 tracking-wider leading-none hover:text-yellow-300 hover:underline transition inline-block">Contacto
          <p class="font-rave text-xs text-zinc-400 tracking-widest uppercase mt-1">Sé parte del caos creativo</p>
        </div>

        <!-- Email -->
        <div class="text-center md:text-left">
          <p class="text-[10px] text-zinc-500 uppercase tracking-widest font-rave">Correo Electrónico</p>
          <a href="mailto:lunadafreerave@gmail.com" class="text-yellow-400 font-rave font-bold hover:underline">
            lunadafreerave@gmail.com
          </a>
        </div>

        <!-- Redes Sociales -->
        <div class="flex items-center gap-5 text-xl text-yellow-400">
          <a href="https://www.instagram.com/raversdistopic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="hover:scale-125 transition">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/tu_usuario" target="_blank" rel="noopener noreferrer" aria-label="X Twitter" class="hover:scale-125 transition">
            <i class="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.tiktok.com/@tu_usuario" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="hover:scale-125 transition">
            <i class="fab fa-tiktok"></i>
          </a>
          <a href="https://www.youtube.com/@tu_canal" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="hover:scale-125 transition">
            <i class="fab fa-youtube"></i>
          </a>
        </div>

        <!-- Botón WhatsApp -->
        <a href="https://wa.me/573142418909" target="_blank" rel="noopener noreferrer"
          class="flex items-center gap-2.5 border border-yellow-400 px-4 py-2 rounded-lg text-yellow-400 font-rave font-bold uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition shadow-[0_0_10px_rgba(255,230,0,0.2)]">
          <i class="fab fa-whatsapp text-lg"></i>
          <span>WhatsApp</span>
        </a>

      </div>
    </footer>
  `;
});