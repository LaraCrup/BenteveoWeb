<template>
    <footer>
        <div class="columnAlignCenter">
            <NuxtLink :to="ROUTE_NAMES.HOME" class="allCenter">
                <NuxtImg class="logo" src="/images/headerFooter/Logo-Benteveo.webp" alt="Logo Benteveo" />
            </NuxtLink>
            <div class="links">
                <NuxtLink v-for="(link, index) in links" :key="index" :to="link.href" :aria-label="link.ariaLabel" target="_blank" class="allCenter"><Icon :name="`mingcute:${link.icon}`" /></NuxtLink>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';

const links = [
    {
        href: ROUTE_NAMES.HOME,
        icon: 'earth-2-line',
        ariaLabel: 'Ir a benteveo.com'
    },
    {
        href: 'https://www.linkedin.com/company/benteveo/',
        icon: 'linkedin-line',
        ariaLabel: 'Ir al LinkedIn de Benteveo'
    }
];
</script>

<style scoped>
footer>div {
    gap: 1.5rem;
    padding: 1.5rem 1rem;
}

.logo {
    width: 9rem;
    height: 2.25rem;
    object-fit: contain;
}

.links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.links a {
    width: 3rem;
    height: 3rem;
    border-radius: 999px;
    background: var(--color-white);
}

.links a span {
    color: var(--color-dark-black);
    font-size: 1.5rem !important;
}

@media (width >=768px) {
    footer>div {
        flex-direction: row;
        justify-content: space-between;
        padding: 1.75rem 4rem;
    }

    .logo {
        width: 11rem;
    }
}

@media (width >=1080px) {
    .logo {
        height: 2.75rem;
    }
}

@media (width >=1440px) {
    footer {
        padding: 1.75rem 4rem;
    }

    footer>div {
        max-width: 1440px;
        padding: 0;
    }
}
</style>