<template>
    <header class="bg-dark-black">
        <div class="rowSpaceBetweenCenter">
            <NuxtLink :to="ROUTE_NAMES.HOME" class="allCenter">
                <NuxtImg class="logo" src="/images/headerFooter/Logo-Benteveo.webp" alt="Logo Benteveo" />
            </NuxtLink>
            <button class="landingButton">
                <span>Registrarme</span>
                <span>Confirmar asistencia</span>
            </button>
        </div>
    </header>
</template>

<script setup>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';
</script>

<style scoped>
header {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 1.5rem 1rem;
}

header button span:last-of-type {
    display: none;
}

.logo {
    width: 6.75rem;
    height: 1.75rem;
    object-fit: contain;
}

@media (width >=768px) {
    header {
        padding: 1.75rem 2rem;
    }

    header button span:first-of-type {
        display: none;
    }

    header button span:last-of-type {
        display: inline;
    }

    .logo {
        width: 11rem;
        height: 2.75rem;
    }
}

@media (width >=1080px) {
    header {
        padding: 1.75rem 4rem;
    }
}

@media (width >=1440px) {
    header {
        padding: 2rem 5.625rem;
    }
}
</style>