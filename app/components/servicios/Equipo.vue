<template>
    <section>
        <div class="equipo">
            <video autoplay muted loop playsinline class="backgroundVideo">
                <source src="/videos/somos/video-nuestro-adn.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="equipoContent column">
                <div class="adnContainer column">
                    <div>
                        <p>NUESTRO ADN</p>
                        <h2>EL TRABAJO EN EQUIPO</h2>
                    </div>
                    <p>
                        Somos una agencia que trabaja junto al cliente como equipo para hacer que las grandes ideas se
                        hagan realidad. <span class="font-bold">JUNTOS podemos todo.</span>
                    </p>
                </div>
                <NuxtLink :to="routes.CONVERSEMOS" class="primaryButton">PENSEMOS EN EQUIPO</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';

export default {
    data() {
    return {
        routes: ROUTE_NAMES
    };
    }
}
</script>

<style scoped>
.equipo {
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
    object-fit: cover;
}

.equipoContent {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    position: relative;
    z-index: 2;
    background: rgba(0, 0, 0, 0.7);
    color: var(--color-white);
    padding: 1.25rem 1rem;
}

.adnContainer {
    gap: 0.25rem;
}

.adnContainer>div>p {
    font-size: 0.875rem;
    font-weight: 500;
}

@media (width >=660px) {
    .equipo {
        display: flex;
        justify-content: flex-end;
    }

    .equipoContent {
        width: 60%;
        padding: 2.5rem 1.875rem;
    }

    .adnContainer>div>p {
        font-size: 1rem;
        font-weight: 600;
    }
}

@media (width >=992px) {
    .equipoContent {
        gap: 2rem;
        padding: 5rem 3.75rem;
    }

    .adnContainer {
        gap: 0.5rem;
    }

    .adnContainer > p {
        max-width: 580px;
    }
}

@media (width >=1440px) {
    .equipoContent {
        gap: 2.25rem;
        padding: 6rem 5.625rem;
    }

    .adnContainer {
        gap: 0.75rem;
    }
}
</style>