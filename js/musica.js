// 1. Lista de canciones (Cambia estos nombres por los de tus archivos en la carpeta musica/)
const playlist = [
    {
        title: "house track 1",
        src: "musica/cancionhouse.mp3"
    },
    {
        title: "Industrial Kick Assault - Drum Enigma",
        src: "musica/track2.mp3"
    },
    {
        title: "Dark Warehouse Rave - Distopic Set",
        src: "musica/track3.mp3"
    }
];

let currentTrack = 0;

// Elementos del DOM
const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const equalizer = document.getElementById('equalizer');
const statusTag = document.getElementById('statusTag');
const trackTitle = document.getElementById('trackTitle');
const progressBar = document.getElementById('progressBar');
const progressBarContainer = document.getElementById('progressBarContainer');

// Cargar canción seleccionada
function loadTrack(index) {
    audio.src = playlist[index].src;
    trackTitle.textContent = playlist[index].title;
    progressBar.style.width = '0%';
}

// Reproducir
function playSong() {
    audio.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
    equalizer.classList.add('playing');
    statusTag.textContent = 'En Vivo';
    statusTag.classList.remove('bg-zinc-800', 'text-zinc-300');
    statusTag.classList.add('bg-yellow-400', 'text-black');
}

// Pausar
function pauseSong() {
    audio.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    equalizer.classList.remove('playing');
    statusTag.textContent = 'Pausado';
    statusTag.classList.remove('bg-yellow-400', 'text-black');
    statusTag.classList.add('bg-zinc-800', 'text-zinc-300');
}

// Botón Play/Pausa
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

// Siguiente pista
function nextSong() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    playSong();
}

// Pista anterior
function prevSong() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
    playSong();
}

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Pasar a la siguiente canción automáticamente al terminar
audio.addEventListener('ended', nextSong);

// Actualizar barra de progreso al ritmo de la canción
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
});

// Permitir saltar a un segundo específico al hacer clic en la barra
progressBarContainer.addEventListener('click', (e) => {
    const width = progressBarContainer.clientWidth;
    const clickX = e.offsetX;
    if (audio.duration) {
        audio.currentTime = (clickX / width) * audio.duration;
    }
});

// Inicializar con la primera pista al cargar la web
loadTrack(currentTrack);