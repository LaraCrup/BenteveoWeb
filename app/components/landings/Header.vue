<template>
    <header class="bg-dark-black">
        <div class="rowSpaceBetweenCenter">
            <NuxtLink :to="ROUTE_NAMES.HOME">
                <NuxtImg class="logo" src="/images/headerFooter/Logo-Benteveo.webp" alt="Logo Benteveo" />
            </NuxtLink>
            <button class="landingButton">Registrarme</button>
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

.logo {
    width: 6.75rem;
    height: 1.75rem;
    object-fit: contain;
}

@media (width >=660px) {
    header {
        padding: 1.5rem 1.875rem;
    }
}

@media (width >=850px) {
    header {
        padding: 1.75rem 2.5rem;
    }
}

@media (width >=992px) {
    header {
        padding: 1.75rem 3.75rem;
    }
}

@media (width >=1440px) {
    header {
        padding: 2rem 5.625rem;
    }
}
</style>