<template>
    <section class="heroContainer">
        <div class="hero column">
            <video ref="videoElement" :src="videoSrc" autoplay muted loop playsinline webkit-playsinline></video>
            <div>
                <div class="heroContent columnAlignCenter">
                    <h1 class="gradient-text">GEO, la nueva estrategia para aparecer en las respuestas de la IA</h1>
                    <p class="subtitle">Un encuentro exclusivo con cocina en vivo</p>
                    <a href="https://maps.app.goo.gl/cAHTukBY7XohB95t9" target="_blank" class="bg-blue-red">
                        <p>
                            11 de diciembre · 9:30 hs · AZAI Espacio Culinario
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const videoSrc = ref('/videos/landings/Evento-Geo-Mobile.mp4')
const videoElement = ref(null)

const updateVideoSource = () => {
    const width = window.innerWidth

    if (width < 768) {
        videoSrc.value = '/videos/landings/Evento-Geo-Mobile.mp4'
    } else if (width < 1080) {
        videoSrc.value = '/videos/landings/Evento-Geo-Tablet.mp4'
    } else if (width < 1440) {
        videoSrc.value = '/videos/landings/Evento-Geo-Desktop.mp4'
    } else {
        videoSrc.value = '/videos/landings/Evento-Geo-DesktopXL.mp4'
    }
}

onMounted(() => {
    updateVideoSource()
    window.addEventListener('resize', updateVideoSource)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateVideoSource)
})
</script>

<style scoped>
* {
    font-family: "Lato", serif;
}

.heroContainer {
    top: 5.125rem;
    padding: 0;
}

.hero {
    height: auto;
    gap: 0;
    padding: 0;
}

.hero video {
    min-height: 15.75rem;
    object-fit: cover;
    object-position: right;
}

.heroContent {
    gap: 1.5rem;
    background-color: black;
    padding: 2.5rem 1rem;
}

.hero a {
    border-radius: 999px;
    color: var(--color-white);
    text-decoration: none;
    padding: 0.75rem;
}

h1 {
    text-align: center;
    font-size: 1.75rem;
    font-weight: bold;
}

.subtitle {
    display: none;
}

@media (width >=768px) {
    .heroContainer {
        top: 6.625rem;
    }

    .hero {
        flex-direction: column !important;
        align-items: flex-end !important;
        background: var(--color-dark-black);
    }

    .hero video {
        height: 20rem;
    }

    .hero>div {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: linear-gradient(to right, var(--color-dark-black) 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%);
        padding: 3.125rem 0 3.125rem 2rem;
    }

    .heroContent {
        max-width: 45%;
        height: 100%;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
        background: none;
        padding: 0;
    }

    .hero h1 {
        text-align: start;
        font-size: 1.75rem;
    }

    .hero .subtitle {
        display: block;
        font-size: 1.25rem;
        font-weight: 500;
    }

    .hero a {
        padding: 0.75rem 1.25rem;
    }

    .hero p {
        font-size: 0.75rem;
    }
}

@media (width >=1080px) {
    .heroContainer {
        top: 107px;
    }

    .heroContent {
        max-width: 50%;
    }

    .hero video {
        height: 100%;
        max-height: 31.25rem;
    }

    .hero>div {
        padding: 5rem 0 5rem 4rem;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero .subtitle {
        max-width: 28rem;
        font-size: 1.75rem;
    }

    .hero a {
        text-align: center;
        padding: 1rem 1.5rem;
    }

    .hero p {
        font-size: 1.25rem;
    }
}

@media (width >=1440px) {
    .heroContainer {
        top: 115px;
        background: var(--color-dark-black);
    }

    .hero {
        max-width: 1440px;
    }

    .hero>div {
        background: linear-gradient(to left, var(--color-dark-black) 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 100%);
    }
}

@media (width >=1600px) {
    .hero>div {
        padding-left: 0;
    }
}
</style>