<template>
    <section class="w-full pensamosHacemos">
        <video autoplay muted loop playsinline class="backgroundVideo">
            <source src="/videos/somos/video-nuestro-adn.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="column">
            <div class="miniVideoContainer column">
                <video autoplay muted loop playsinline class="bgVideo">
                    <source src="/videos/home/backstage-agencia-productora-benteveo.mp4" type="video/mp4">
                </video>
            </div>
            <div class="hacemosContent column">
                <div class="column wow animate__animated animate__fadeInUp">
                    <p class="font-bold">SI LO PENSAMOS,</p>
                    <h2>LO HACEMOS</h2>
                </div>
                <p class="maxParagraph wow animate__animated animate__fadeInUp">
                    La creatividad es el origen de todo lo que hacemos. Pero no nos detenemos en las ideas; las hacemos
                    realidad. Las convertimos en acciones innovadoras, útiles e inteligentes orientadas a lograr
                    resultados.
                </p>
                <NuxtLink :to="ROUTE_NAMES.TRABAJOS" class="primaryButton wow animate__animated animate__fadeInUp">PASEN
                    Y VEAN
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';

</script>

<style scoped>
.pensamosHacemos {
    width: 100%;
    max-width: 100%;
    position: relative;
    overflow: hidden;
    padding: 0;
}

.backgroundVideo {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    object-fit: cover;
}

.pensamosHacemos>div {
    max-width: 100%;
    align-items: flex-end;
    position: relative;
    z-index: 2;
    padding: 0;
}

.miniVideoContainer {
    width: 100%;
    height: 100%;
    display: none;
}

.miniVideoContainer video {
    width: 100%;
    height: 19rem;
    filter: none;
    object-fit: cover;
}

.hacemosContent {
    width: 100%;
    height: 100%;
    gap: 0.75rem;
    background: rgba(0, 0, 0, 0.7);
    padding: 3rem 1rem;
}

.hacemosContent div p {
    font-size: 1rem;
}

@media (width >=660px) {
    .pensamosHacemos {
        align-items: flex-end;
        position: relative;
    }

    .hacemosContent {
        width: 60%;
        gap: 1.25rem;
        padding: 3rem 3rem 3rem 5rem;
    }

    .miniVideoContainer {
        width: 12.5rem;
        height: 12.5rem;
        display: block;
        position: absolute;
        top: 50%;
        left: 16%;
        border: 10px solid var(--color-white);
        transform: translateY(-50%);
    }

    .miniVideoContainer video {
        width: 100%;
        height: 100%;
    }
}

@media (width >=750px) {
    .miniVideoContainer {
        left: 20%;
    }
}

@media (width >=850px) {
    .hacemosContent {
        gap: 1.5rem;
    }

    .miniVideoContainer {
        left: 22.5%;
    }

    .hacemosContent div p {
        font-size: 1.25rem;
    }
}

@media (width >=992px) {
    .hacemosContent {
        padding: 4rem 4rem 4rem 6rem;
    }

    .hacemosContent div p {
        font-size: 1.5rem;
    }

    .miniVideoContainer {
        width: 15rem;
        height: 15rem;
    }
}

@media (width >=1280px) {
    .hacemosContent {
        gap: 2rem;
        padding: 5rem 5rem 5rem 9rem;
    }

    .miniVideoContainer {
        width: 19rem;
        height: 19rem;
        left: 24%;
    }
}

@media (width >=1440px) {
    .hacemosContent {
        padding: 6rem 6rem 6rem 11rem;
    }

    .hacemosContent div p {
        font-size: 1.625rem;
    }

    .miniVideoContainer {
        width: 22rem;
        height: 22rem;
    }
}

@media (width >=1920px) {
    .pensamosHacemos {
        padding: 0;
    }

    .pensamosHacemos>div {
        justify-content: flex-end;
        flex-direction: row;
    }

    .hacemosContent {
        padding: 8rem 6rem 8rem 11rem;
    }

    .miniVideoContainer {
        position: static;
        transform: translateY(-28%);
        margin-right: -6rem;
    }
}
</style>