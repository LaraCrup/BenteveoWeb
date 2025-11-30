<template>
    <section class="heroContainer">
        <div class="hero column">
            <video src="/videos/landings/Evento-Geo.mp4" autoplay muted loop class="w-full h-[15.75rem]"></video>
            <div class="columnAlignCenter">
                <h1 class="gradient-text">GEO, la nueva estrategia para aparecer en las respuestas de la IA</h1>
                <span class="bg-blue-red">
                    <p>
                        11 de diciembre · 9:30 hs · AZAI Espacio Culinario
                    </p>
                </span>
            </div>
        </div>
    </section>
</template>

<style scoped>
* {
    font-family: "Lato", serif;
}

.heroContainer {
    top: 81px;
    padding: 0;
}

.hero {
    height: auto;
    gap: 0;
    padding: 0;
}

.hero img {
    width: 100%;
    min-height: 15.75rem;
    object-fit: cover;
    object-position: right;
}

.hero>div {
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
</style>