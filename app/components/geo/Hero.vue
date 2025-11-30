<template>
    <section class="heroContainer">
        <div class="hero column">
            <video src="/videos/landings/Evento-Geo.mp4" autoplay muted loop></video>
            <div>
                <div class="heroContent columnAlignCenter">
                    <h1 class="gradient-text">GEO, la nueva estrategia para aparecer en las respuestas de la IA</h1>
                    <p class="subtitle">Un encuentro exclusivo con cocina en vivo</p>
                    <span class="bg-blue-red">
                        <p>
                            11 de diciembre · 9:30 hs · AZAI Espacio Culinario
                        </p>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

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
    width: 100%;
    min-height: 15.75rem;
    object-fit: cover;
    object-position: right;
}

.heroContent {
    gap: 1.5rem;
    background-color: black;
    padding: 2.5rem 1rem;
}

.hero span {
    border-radius: 999px;
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

    .hero video {
        height: 20rem;
    }

    .hero>div {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: linear-gradient(to right, var(--color-dark-black) 0%, var(--color-dark-black) 50%, rgba(0, 0, 0, 0) 100%);
        padding: 3.125rem 0 3.125rem 2rem;
    }

    .heroContent {
        max-width: 20rem;
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

    .hero span {
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
        max-width: 31rem;
    }

    .hero video {
        height: 31.25rem;
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

    .hero span {
        width: 100%;
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
    }
}
</style>