# ⚡ Distopic Ravers ✕ Drum Enigma — Official Web Platform

> Plataforma web oficial para la alianza underground **Distopic Ravers** y **Drum Enigma**, diseñada para la difusión de eventos libres (*Free Raves* en Bogotá, Colombia), cartelera de artistas, indumentaria y cultura rave autogestionada.

---

## 🔗 Demo en Producción

Puedes explorar el sitio web desplegado en el siguiente enlace:
👉 **[https://distopic-ravers-rave.infinityfreeapp.com/?i=1](https://distopic-ravers-rave.infinityfreeapp.com/?i=1)**

---

## 🌌 Características Principales

* **Estética Cyberpunk & Underground:** Paleta visual basada en negro profundo, amarillo industrial (`#FFE600`) y rojo neón (`#EF4444`), tipografías urbanas (*Permanent Marker* y *Rajdhani*) e iluminaciones dinámicas.
* **Componentes Modulares Dinámicos:** Barra de navegación fija y pie de página reutilizables e inyectados mediante scripts puros de JavaScript (`navbar.js`, `footer.js`), con detección automática de la página activa.
* **Reproductor de Audio Custom "Rave Bot":** Reproductor nativo para *streaming* continuo de sets de Hard Techno/Acid con barra de progreso interactiva, control de pistas y ecualizador animado.
* **Sección de Eventos Pasados Interactiva:**
* Reproducción automática de clips de video activada según la posición del usuario en pantalla (*Intersection Observer API*).
* Selector interactivo para alternar entre varios videos con controles nativos de reproducción y volumen.
* Carruseles fotográficos sincronizados con rotación automática.


* **Insignia en Llamas Realista:** Efecto visual de fuego por capas vectoriales SVG en CSS puro con animación asimétrica.
* **Terminal de Contacto y Apoyo Comunitario:** Formulario enlazado con redirección directa a WhatsApp y pasarela informativa de aportes voluntarios (Nequi, Daviplata y USDT TRC20).

---

## 🛠️ Tecnologías Utilizadas

* **Estructura:** HTML5 semántico
* **Estilos:** [Tailwind CSS](https://www.google.com/search?q=https://tailwindcss.com/) (CDN) + Hojas de estilo personalizadas CSS3
* **Lógica:** Vanilla JavaScript (ES6+) modularizado
* **Iconografía:** [FontAwesome 6.5.0](https://www.google.com/search?q=https://cdnjs.com/libraries/font-awesome)
* **Fuentes:** Google Fonts (*Permanent Marker*, *Rajdhani*, *Space Grotesk*)
* **Alojamiento:** Vercel

---

## 📁 Estructura del Proyecto

```text
├── index.html              # Portada principal y reproductor Rave Bot
├── htmls/
│   ├── eventos.html        # Convocatoria actual y registro de eventos anteriores
│   ├── artistas.html       # Line-up de DJs y perfiles de sonido
│   ├── tienda.html         # Catálogo de ropa y accesorios rave
│   ├── apoyanos.html       # Canales de donación y financiación autogestiva
│   ├── contactanos.html    # Formulario terminal y canal directo
│   └── quienesSomos.html   # Manifiesto y trayectoria de los colectivos
├── css/
│   ├── style.css           # Estilos globales y efectos de fuego
│   ├── eventos.css         # Estilos para carruseles, videos y banners
│   ├── artistas.css        # Formato de tarjetas de DJs
│   ├── tienda.css          # Estilos de catálogo y productos
│   └── apoyanos.css        # Diseño de cajas y terminal de desarrollador
├── js/
│   ├── navbar.js           # Inyección de menú superior responsivo
│   ├── footer.js           # Inyección de pie de página global
│   ├── musica.js           # Lógica y playlist del reproductor de audio
│   └── eventos.js          # Control de videos por scroll y rotación de fotos
└── img/                    # Flyers y recursos gráficos

```

---

## 🚀 Instalación y Ejecución en Local

1. Clona el repositorio:
```bash
git clone https://github.com/TU-USUARIO/distopic-ravers.git

```


2. Entra a la carpeta del proyecto:
```bash
cd distopic-ravers

```


3. Abre el proyecto en un servidor local:
* **Con VS Code:** Haz clic derecho sobre `index.html` y selecciona **Open with Live Server**.
* **Con Node.js (opcional):**
```bash
npx serve .

```





---

## 👥 Créditos & Alianza

* **Desarrollo Web & UI/UX:** Bryan Díaz Sánchez
* **Curaduría & Sonido:** Colectivo Distopic Ravers
* **Concepto & Producción:** Drum Enigma
* **Ciudad:** Bogotá D.C., Colombia
