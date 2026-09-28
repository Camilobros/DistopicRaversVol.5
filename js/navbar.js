document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('main-navbar');
  if (!headerContainer) return;

  // Lista de enlaces
  const navLinks = [
    { name: 'Inicio', url: 'index.html' },
    { name: 'Evento', url: 'htmls/eventos.html' },
    { name: 'Artistas', url: 'htmls/artistas.html' },
    { name: 'Tienda', url: 'htmls/tienda.html' },
    { name: 'Contactanos', url: 'htmls/contactanos.html' },
    { name: 'Quienes somos', url: 'htmls/quienesSomos.html' },
    { name: 'apoyanos', url: 'htmls/apoyanos.html'}
  ];

  const currentPath = window.location.pathname;

  // Generar enlaces de escritorio
  const desktopLinksHTML = navLinks.map(link => {
    const isActive = currentPath.endsWith(link.url) || (link.url === '/index.html' && (currentPath === '/' || currentPath.endsWith('/index.html')));
    const classes = isActive
      ? 'text-yellow-400 border-b-2 border-yellow-400 pb-0.5 glow-yellow'
      : 'text-zinc-300 hover:text-yellow-400 transition';
    return `<a href="${link.url}" class="${classes}">${link.name}</a>`;
  }).join('');

  // Generar enlaces para el menú móvil
  const mobileLinksHTML = navLinks.map(link => {
    const isActive = currentPath.endsWith(link.url);
    const classes = isActive ? 'text-yellow-400 font-bold' : 'text-zinc-300 hover:text-yellow-400';
    return `<a href="${link.url}" class="block py-2 border-b border-zinc-800/60 ${classes}">${link.name}</a>`;
  }).join('');

  // Inyectar navbar fija + espaciador compensador
  headerContainer.innerHTML = `
    <!-- Barra fija a la ventana -->
    <header class="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-yellow-400/30 z-50 px-4 md:px-8 py-3 flex items-center justify-between">
      
      <!-- 1. Logo a la izquierda -->
      <div class="flex items-center gap-3">
        <a href="/index.html" class="w-8 h-8 rounded-full border-2 border-yellow-400 flex items-center justify-center text-yellow-400 shadow-[0_0_8px_#FFE600] hover:scale-105 transition">
          <i class="fas fa-skull text-sm"></i>
        </a>
        <span class="font-rave text-xl font-bold tracking-widest text-yellow-400">LUNADA FREE RAVE</span>
      </div>

      <!-- 2. Links de Navegación centrados -->
      <nav class="hidden md:flex gap-8 text-xs font-rave tracking-widest uppercase font-bold md:absolute md:left-1/2 md:-translate-x-1/2">
        ${desktopLinksHTML}
      </nav>

      <!-- 3. Botón Móvil a la derecha -->
      <div class="flex items-center gap-3">
        <button id="mobileMenuBtn" class="md:hidden text-yellow-400 text-2xl hover:scale-110 transition focus:outline-none" aria-label="Abrir menú">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <!-- Menú Desplegable Móvil -->
      <div id="mobileMenu" class="hidden md:hidden absolute top-full left-0 w-full px-6 py-4 font-rave text-xs tracking-widest uppercase bg-black/95 border-b border-yellow-400/30 space-y-2">
        ${mobileLinksHTML}
      </div>
    </header>

    <!-- Espaciador invisible: compensa la altura de la navbar fija para no tapar el contenido superior -->
    <div class="h-14 md:h-16 w-full"></div>
  `;

  // Control para abrir y cerrar el menú en celulares
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});