<template>
    <NuxtLink :to="`/trabajos/${project.slug}`" class="tiltProject wow animate__animated animate__fadeInUp">
        <div class="w-full h-full flex tiltElement" :ref="'tiltElement'">
            <img :src="`/images/projects/${project.img}-campana-benteveo.webp`"
                :alt="`Campaña ${project.altImg} creada por Benteveo`" class="w-full h-full projectImg" />
            <div class="projectInfo">
                <p class="text-center text-white">{{ project.title }}</p>
                <p class="text-center text-white">{{ project.description }}</p>
                <p class="seeMore text-white">CONOCÉ MÁS</p>
            </div>
        </div>
    </NuxtLink>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';

export default {
    props: {
        project: {
            type: Object,
            required: true
        },
    },
    mounted() {
        this.$nextTick(() => {
            const element = this.$refs.tiltElement;
            if (element) {
                VanillaTilt.init(element, {
                    max: 20,
                    speed: 600,
                    scale: 1.05,
                    glare: true,
                    "max-glare": 0.2,
                    gyroscope: true
                });
            }
        });
    },
    beforeDestroy() {
        const element = this.$refs.tiltElement;
        if (element && element.vanillaTilt) {
            element.vanillaTilt.destroy();
        }
    },
}
</script>

<style scoped>
.tiltProject {
    width: 15rem;
    height: 100%;
    position: relative;
    overflow: visible;
    transition: all 0.3s;
}

.tiltElement {
    transform-style: preserve-3d;
    transform: perspective(1000px);
    will-change: transform;
}

.tiltProject .projectImg {
    object-fit: cover;
}

.projectInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    position: absolute;
    z-index: 1;
    top: 25%;
    left: 0;
    transform: translateZ(20px);
    margin-left: 0.5rem;
    padding: 0 1rem 1rem 1rem;
}

.projectInfo p:first-of-type {
    max-width: 100%;
    position: relative;
    z-index: 2;
    text-align: start !important;
    font-size: 1.75rem;
    font-weight: bold;
    margin-left: -2.5rem;
    transition: all 0.3s;
}

.projectInfo p {
    font-weight: 500;
    text-align: start !important;
}

.tiltProject .seeMore {
    opacity: 0;
    border-bottom: 1px solid var(--color-white);
    font-family: "Fjalla One", sans-serif;
    font-weight: bold;
    text-decoration: none;
    padding-bottom: 2px;
    transition: all 0.3s;
}

.tiltProject:hover .seeMore {
    opacity: 1;
}

.tiltProject:hover p:first-child {
    text-shadow: 2px 10px 10px rgba(0, 0, 0, 0.85);
}

@media (width >=660px) {
    .tiltProject {
        width: 45%;
    }

    .projectsContainer .tiltProject:nth-child(1n) {
        margin-top: -4rem;
    }

    .projectsContainer .tiltProject:nth-child(2n) {
        margin-top: 16rem;
    }

    .projectsContainer .tiltProject:last-of-type {
        margin-top: 6rem;
    }

    .projectInfo {
        top: 30%;
    }
}

@media (width >=992px) {
    .projectsContainer .tiltProject {
        width: 26%;
    }

    .projectsContainer .tiltProject:nth-child(1n),
    .projectsContainer .tiltProject:nth-child(2n) {
        margin-top: 0;
    }

    .projectsContainer>.tiltProject:nth-child(3n-2) {
        margin-top: -10rem;
    }

    .projectsContainer>.tiltProject:nth-child(3n-1) {
        margin-top: 16rem;
    }

    .projectsContainer>.tiltProject:nth-child(3n) {
        margin-top: -2rem;
    }

    .projectsContainer .tiltProject:last-of-type {
        margin-top: 2rem;
    }
}

@media (width >=1440px) {
    .projectsContainer .tiltProject {
        width: 23%;
    }

    .tiltProject h3 {
        font-size: 2rem;
    }
}

@media (width >=1920px) {
    .projectsContainer .tiltProject:last-of-type {
        margin-top: 6rem;
    }
}
</style>