<template>
    <section class="bg-white">
        <div class="column">
            <div class="ideas column wow animate__animated animate__fadeInLeft">
                <h2 class="column">
                    IDEAS QUE VUELAN,<span>QUE CONECTAN CON LA GENTE</span>
                </h2>
                <p class="maxParagraph text-dark-gray">
                    Creamos beneficios para nuestros clientes. Estrategias
                    transformadoras que generen experiencias memorables,
                    conectando a las marcas con los deseos de sus consumidores.
                </p>
            </div>
            <div class="servicesContainer column">
                <div v-for="(service, index) in services" :key="index" class="service column wow animate__animated animate__fadeInUp">
                    <div class="column">
                        <div class="serviceHeader rowCenter">
                            <img :src="`/images/services/${service.img}-Benteveo.svg`"
                                :alt="`${service.alt} Benteveo`" />
                            <h3>{{ service.title }}:</h3>
                        </div>
                        <p class="text-dark-gray">{{ service.description }}</p>
                    </div>
                </div>
            </div>
            <NuxtLink :to="ROUTE_NAMES.SERVICIOS" class="primaryButton btnConoceMas">CONOCÉ MÁS</NuxtLink>
        </div>
    </section>
</template>

<script setup>
import { ROUTE_NAMES } from "~/constants/ROUTE_NAMES";
import { services } from "~/shared/services";
</script>

<style scoped>
section>div {
    gap: 2rem;
}

.ideas {
    gap: 0.25rem;
}

.servicesContainer {
    gap: 1.25rem;
}

.service,
.service>div,
.serviceHeader {
    gap: 0.625rem;
}

.service img {
    width: 1.875rem;
}

.service h3 {
    font-weight: 400;
}

.service a {
    width: max-content;
    display: inline-block;
    position: relative;
    color: var(--color-primary);
    font-weight: 500;
    text-decoration: none;
}

.service a::before {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: var(--color-primary);
    transition: 0.25s ease-in-out;
}

.service a:hover {
    text-decoration: none;
}

.service a:hover:before {
    width: 100%;
}

.btnConoceMas{
    border-color: var(--color-primary);
    color: var(--color-primary);
}

.btnConoceMas:hover{
    background-color: var(--color-primary);
    color: var(--color-black);
}

@media (width >=660px) {
    section>div {
        gap: 2.5rem;
    }

    section>div>div:first-of-type {
        gap: 0.5rem;
    }

    .servicesContainer {
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.5rem;
    }

    .service {
        width: 48%;
        justify-content: space-between;
        gap: 0.75rem;
    }
}

@media (width >=992px) {
    section>div {
        gap: 3rem;
    }

    section>div>div:first-of-type {
        gap: 0.75rem;
    }

    .servicesContainer {
        justify-content: flex-start;
        gap: 2rem;
    }

    .service {
        width: 30%;
        gap: 1rem;
    }

    .serviceHeader {
        flex-direction: column;
        align-items: flex-start;
    }

    .serviceHeader img {
        width: 3.5rem;
    }
}

@media (width >= 1080px) {
    .service {
        width: 31%;
    }
}

@media (width >= 1280px) {
    .service {
        width: 31.45%;
    }
}

@media (width >= 1440px) {
    .service {
        width: 31.625%;
    }
}
</style>
