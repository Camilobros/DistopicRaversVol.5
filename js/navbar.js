document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('main-navbar');
    if (!headerContainer) return;

    // Lista centralizada de enlaces (edita aquí las rutas de tu proyecto)
    const navLinks = [
        { name: 'Inicio', url: '/index.html' },
        { name: 'Evento', url: '/htmls/evento.html' },
        { name: 'Artistas', url: '/htmls/artistas.html' },
        { name: 'Tienda', url: '/htmls/tienda.html' },
        { name: 'Contactanos', url: '/htmls/contactanos.html' },
        { name: 'Quienes somos', url: '/htmls/quienesSomos.html' }
    ];

    // Identificar en qué página estamos para pintar el enlace activo
    const currentPath = window.location.pathname;

    // Generar los <a> para escritorio
    const desktopLinksHTML = navLinks.map(link => {
        const isActive = currentPath.endsWith(link.url) || (link.url === '/index.html' && (currentPath === '/' || currentPath.endsWith('/index.html')));
        const classes = isActive
            ? 'text-yellow-400 border-b-2 border-yellow-400 pb-0.5 glow-yellow'
            : 'text-zinc-300 hover:text-yellow-400 transition';
        return `<a href="${link.url}" class="${classes}">${link.name}</a>`;
    }).join('');

    // Generar los <a> para el menú móvil
    const mobileLinksHTML = navLinks.map(link => {
        const isActive = currentPath.endsWith(link.url);
        const classes = isActive ? 'text-yellow-400 font-bold' : 'text-zinc-300 hover:text-yellow-400';
        return `<a href="${link.url}" class="block py-2 border-b border-zinc-800/60 ${classes}">${link.name}</a>`;
    }).join('');

    // Inyectar estructura completa
    headerContainer.innerHTML = `
    <header class="w-full bg-black/90 backdrop-blur-md border-b border-yellow-400/30 sticky top-0 z-50 px-4 md:px-8 py-3">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        
        <!-- Logo / Ícono -->
        <a href="/index.html" class="flex items-center gap-3 group">
          <div class="w-8 h-8 rounded-full border-2 border-yellow-400 flex items-center justify-center text-yellow-400 shadow-[0_0_8px_#FFE600] group-hover:scale-105 transition">
            <i class="fas fa-skull text-sm"></i>
          </div>
          <span class="font-rave text-xl font-bold tracking-widest text-yellow-400">DISTOPIC</span>
        </a>

        <!-- Navegación Escritorio -->
        <nav class="hidden md:flex gap-8 text-xs font-rave tracking-widest uppercase font-bold">
          ${desktopLinksHTML}
        </nav>

        <!-- Botón Hamburguesa Móvil -->
        <div class="flex items-center md:hidden">
          <button id="mobileMenuBtn" class="text-yellow-400 text-2xl hover:scale-110 transition focus:outline-none" aria-label="Abrir menú">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <!-- Menú Desplegable Móvil -->
      <div id="mobileMenu" class="hidden md:hidden px-4 pt-3 pb-4 font-rave text-xs tracking-widest uppercase bg-black/95 border-t border-yellow-400/20 mt-3 space-y-2">
        ${mobileLinksHTML}
      </div>
    </header>
  `;

    // Comportamiento del botón hamburguesa móvil
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});