<template>
    <main class="novedad">
        <section class="heroContainer">
            <video autoplay muted loop playsinline class="bgVideo">
                <source :src="`/videos/projects/${project.video}-publicidad-benteveo.mp4`" type="video/mp4">
            </video>
            <div class="hero column">
                <div class="column">
                    <NuxtImg :src="`/images/brands/${project.brand}_logo.webp`" :alt="project.altBrand" class="brand" />
                    <h1>{{ project.title.toUpperCase() }}</h1>
                    <p>{{ project.subtitle }}</p>
                </div>
                <DefaultSocialMedia />
                <DefaultScroll />
            </div>
        </section>
        <div class="parallaxContent">
            <section class="projectContent bg-white">
                <nav>
                    <ul class="rowCenter">
                        <li v-for="section in filteredSections" :key="section.id">
                            <a @click.prevent="scrollToSection(section.id)" :href="`#${section.id}`">{{ section.name
                            }}</a>
                        </li>
                    </ul>
                </nav>
                <div class="column">
                    <div id="objective" class="w-full column">
                        <h2>Objetivo</h2>
                        <p>{{ project.objective }}</p>
                    </div>
                    <div id="campain" class="w-full column">
                        <h2>Campaña</h2>
                        <p v-for="(item, index) in project.campain" :key="index">{{ item }}</p>
                    </div>
                    <div id="results" class="w-full column">
                        <h2>Resultados</h2>
                        <div v-if="project.results.texts" class="columnGap column">
                            <p v-for="(item, index) in project.results.texts" :key="index">{{ item }}</p>
                        </div>
                        <div v-if="project.results.webs">
                            <a :href="item.link" v-for="(item, index) in project.results.webs" :key="index"
                                target="_blank" class="website">{{ item.name }}</a>
                        </div>
                        <div v-if="project.results.videos" class="videos">
                            <div v-for="(video, index) in project.results.videos" :key="index"
                                style="padding:56.25% 0 0 0;position:relative;">
                                <iframe :src="`https://www.youtube.com/embed/${video.id}`"
                                    style="position:absolute;top:0;left:0;width:100%;height:100%;" :title="video.title"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                        <div v-if="project.results.instagram" class="instagram">
                            <div v-for="(post, index) in project.results.instagram" :key="index"
                                class="instagramContainer">
                                <blockquote class="instagram-media"
                                    :data-instgrm-permalink="`https://www.instagram.com/reel/${post.id}/`"
                                    data-instgrm-version="14">
                                    <a :href="`https://www.instagram.com/reel/${post.id}/`" target="_blank">
                                        Ver esta publicación en Instagram
                                    </a>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div v-if="project.awards" id="awards" class="w-full column">
                        <h2>Premios</h2>
                        <div v-if="project.awards.texts">
                            <p v-for="(item, index) in project.awards.texts" :key="index">{{ item }}</p>
                        </div>
                        <div v-if="project.awards.press" class="columnGap column">
                            <a :href="item.link" v-for="(item, index) in project.awards.press" :key="index"
                                target="_blank" class="award">{{ item.name }}</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';
import { projects } from '~/shared/projects';

const router = useRouter();
const route = useRoute();

// Obtener el proyecto basado en el slug
const project = ref(projects.find(p => p.slug === route.params.slug));

// Definir secciones
const sections = [
    { id: 'objective', name: 'Objetivo' },
    { id: 'campain', name: 'Campaña' },
    { id: 'results', name: 'Resultados' },
    { id: 'awards', name: 'Premios' }
];

// Filtrar secciones basado en la disponibilidad de datos
const filteredSections = computed(() => {
    return sections.filter(section =>
        section.id !== 'awards' || project.value?.awards
    );
});

onMounted(() => {
    if (!project.value) {
        router.push(ROUTE_NAMES.PROJECTS);
    }

    if (!window.instgrm) {
        const script = document.createElement('script');
        script.async = true;
        script.src = '//www.instagram.com/embed.js';
        document.body.appendChild(script);
    } else {
        window.instgrm.Embeds.process();
    }
});

// Función para desplazamiento suave
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 78;
        const navHeight = 72;
        let offset = headerHeight + navHeight;

        if (window.innerWidth >= 660) offset = 88 + navHeight;
        if (window.innerWidth >= 850) offset = 96 + navHeight;
        if (window.innerWidth >= 992) offset = 96 + navHeight;
        if (window.innerWidth >= 1080) offset = 96 + 100;

        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
};

// Configuración SEO para la página
useSeoMeta({
    title: () => `${project.value?.title} | Benteveo - Trabajos`,
    description: () => project.value?.description,
    ogTitle: () => `${project.value?.title} | Benteveo - Trabajos`,
    ogDescription: () => project.value?.description,
    ogImage: () => `/images/projects/${project.value?.img}-campana-benteveo.webp`,
    ogUrl: () => `https://www.benteveo.com/trabajos/${project.value?.slug}`,
    twitterTitle: () => `${project.value?.title} | Benteveo - Trabajos`,
    twitterDescription: () => project.value?.description,
    twitterImage: () => `/images/projects/${project.value?.img}-campana-benteveo.webp`,
    twitterCard: 'summary_large_image',
});

// Configuración de Schema.org para proyecto creativo (work)
useSchemaOrg([
    defineWebPage({
        name: () => project.value?.title,
        description: () => project.value?.description,
        image: () => `https://www.benteveo.com/images/projects/${project.value?.slug}.webp`,
    }),
    {
        '@type': 'CreativeWork',
        name: () => project.value?.title,
        description: () => project.value?.description,
        image: () => `https://www.benteveo.com/images/projects/${project.value?.slug}.webp`,
        author: {
            '@type': 'Organization',
            name: 'Benteveo',
            url: 'https://www.benteveo.com'
        },
        headline: () => project.value?.subtitle,
        datePublished: new Date().toISOString(),
        publisher: {
            '@type': 'Organization',
            name: 'Benteveo',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.benteveo.com/images/logo.png'
            }
        }
    }
]);
</script>

<style scoped>
.brand {
    width: 5.313rem;
}

.projectContent nav {
    background: var(--color-white);
}

nav ul li a {
    color: var(--color-black);
}

.projectContent>div {
    max-width: 1440px;
    gap: 3.75rem;
}

.projectContent>div>div,
.columnGap {
    gap: 0.75rem;
}

.projectContent>div>div p,
.award,
.website {
    color: var(--color-dark-gray);
}

.videos,
.instagram {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.videos div {
    width: 100%;
    max-width: 350px;
    padding: 6rem 0 !important;
}

.instagramContainer {
    width: 100%;
    max-width: min-content;
}

.instagram-media {
    background: #FFF;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    margin: 1px;
    max-width: 540px;
    min-width: 326px;
    padding: 0;
    width: 99.375%;
    width: calc(100% - 2px);
}

@media (width >=660px) {
    .brand {
        width: 8rem;
    }

    .projectContent>div>div,
    .columnGap {
        gap: 1rem;
    }
}

@media (width >=992px) {
    .hero p {
        margin-right: 4rem;
    }
}

@media (width >=1080px) {
    .brand {
        width: 10.625rem;
    }

    .projectContent>div {
        gap: 5rem;
    }

    .projectContent>div>div,
    .columnGap {
        gap: 1.25rem;
    }

    .videos,
    .instagram {
        flex-direction: row;
        gap: 2.75rem;
    }

    .videos div {
        max-width: 470px;
        padding: 8rem 0 !important;
    }
}

@media (width >=1440px) {
    .hero p {
        margin-right: 8rem;
    }
}
</style>