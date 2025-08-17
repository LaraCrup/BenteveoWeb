<template>
    <section class="bg-white">
        <div class="modeloContainer column">
            <div class="modelo column">
                <div>
                    <h2 class="column">Modelo <span>AGENCIA - PRODUCTORA</span></h2>
                    <p class="text-dark-gray">
                        Lo pensamos, les metemos estrategia, corazón y convertimos las ideas en algo real...
                    </p>
                </div>
                <div class="column">
                    <p>
                        Nosotros nos encargamos. Abarcamos todo lo que una marca necesita para la comunicación de sus
                        productos o servicios.
                    </p>
                    <p class="text-dark-gray">
                        Integramos las áreas del marketing y la producción; desde la estrategia y la creatividad hasta
                        la
                        ejecución. Simplificando el proceso y brindando una solución integral.
                    </p>
                </div>
            </div>
            <div class="equipoContainer">
                <ClientOnly>
                    <swiper-container class="swiperEquipo" ref="swiperEquipo" :init="false">
                        <swiper-slide v-for="(person, index) in equipo" :key="index">
                            <figure class="personItem columnAlignCenter">
                                <img :src="`/images/somos/${person.img}-Benteveo.webp`" :alt="person.alt">
                                <figcaption>
                                    <p class="text-primary">{{ person.name }}</p>
                                    <p class="text-white">{{ person.role }}</p>
                                </figcaption>
                            </figure>
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
            </div>
        </div>
    </section>
</template>

<script setup>
import { equipo } from '~/shared/equipo'

const swiperEquipo = ref(null);
const slides = ref(equipo);
const swiper = useSwiper(swiperEquipo, {
    slidesPerView: 2,
    slidesPerGroup: 1,
    loop: true,
    loopFix: true,
    loopedSlides: slides.value.length,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    spaceBetween: 8,
    breakpoints: {
        600: {
            slidesPerView: Math.min(3, slides.value.length),
        },
        800: {
            slidesPerView: Math.min(4, slides.value.length),
        },
        992: {
            slidesPerView: Math.min(5, slides.value.length),
        },
    },
});
</script>

<style scoped>
.modeloContainer {
    gap: 3rem;
    padding-bottom: 0;
}

.modelo {
    gap: 2rem;
}

.modelo>div {
    gap: 0.5rem;
}

.modelo>div:last-of-type>p:first-child {
    font-weight: 500;
    font-size: 0.875rem;
}

.equipoContainer {
    width: 100%;
    max-width: calc(100vw - 2rem);
    overflow: hidden;
    position: relative;
}

.swiperEquipo {
    width: 100%;
    margin: 0;
    padding: 0;
}

.swiperEquipo .swiper-container {
    overflow: hidden;
    width: 100%;
}

.swiperEquipo .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.personItem {
    height: 12rem;
}

.personItem>* {
    transition: all 0.25s ease-in-out;
}

.personItem img {
    height: 100%;
    object-fit: contain;
}

.personItem figcaption {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    text-align: center;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.9);
    padding-bottom: 0.5rem;
}

.personItem figcaption p:first-of-type {
    font-size: 0.875rem;
    font-weight: 800;
    margin-bottom: 0;
}

.personItem:hover img {
    transform: translateY(20px);
}

.personItem:hover figcaption {
    opacity: 1;
}

@media (width >=660px) {
    .modelo {
        flex-direction: row;
        justify-content: space-between;
    }

    .modelo>div:first-of-type {
        width: 55%;
    }

    .modelo>div:last-of-type {
        width: 50%;
    }

    .modelo>div:first-of-type>p {
        max-width: 335px;
    }

    .modelo>div:last-of-type>p:first-child,
    .personItem figcaption p:first-of-type {
        font-size: 1rem;
    }

    .equipoContainer {
        max-width: calc(100vw - 3.75rem);
    }

    .personItem {
        height: 14rem;
    }
}

@media (width >=992px) {
    .modelo>div:last-of-type {
        width: 60%;
    }

    .modelo>div:first-of-type>p {
        max-width: 380px;
    }

    .modelo>div:last-of-type>p:first-child,
    .personItem figcaption p:first-of-type {
        font-size: 1.125rem;
    }

    .equipoContainer {
        max-width: calc(100vw - 7.5rem);
    }
}

@media (width >=1440px) {
    .modelo>div:first-of-type>p {
        max-width: 590px;
    }

    .equipoContainer {
        max-width: calc(100vw - 11.25rem);
    }
}
</style>