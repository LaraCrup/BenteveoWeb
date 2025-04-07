<template>
    <main>
        <PagesHero title="LO QUE HACEMOS HABLA POR NOSOTROS"
            description="Descubrí las campañas que creamos con pasión, estrategia e innovación."
            backgroundClass="heroSomos" heroVideo="trabajos/trabajos-campanas-eventos-tutoriales-publicidad" />

        <div class="parallaxContent">
            <section class="projectContent bg-black">
                <nav class="bg-black sticky-nav">
                    <ul class="rowCenter">
                        <li v-for="section in sections" :key="section.id">
                            <a @click.prevent="scrollToSection(section.id)" :href="`#${section.id}`">{{ section.name
                                }}</a>
                        </li>
                    </ul>
                </nav>

                <ProjectSection v-for="section in projectSections" :key="section.id" :id="section.id"
                    :title="section.name" :projects="section.projects" />
            </section>
        </div>
    </main>
</template>

<script setup>
import { projects } from "~/shared/projects";
import useProjects from "~/composables/useProjects";

useSeoMeta({
    title: "Trabajos y Proyectos | Benteveo - Creatividad que Impacta",
    description: "Descubrí los proyectos creativos y campañas de comunicación que desarrollamos en Benteveo. Historias de marcas que conectan con su audiencia y generan impacto real.",
    ogTitle: "Trabajos y Proyectos | Benteveo - Creatividad que Impacta",
    ogDescription: "Descubrí los proyectos creativos y campañas de comunicación que desarrollamos en Benteveo. Historias de marcas que conectan con su audiencia y generan impacto real.",
    ogImage: "/headerFooter/Logo-Benteveo.webp",
    ogType: "website",
    ogUrl: "https://www.benteveo.com/trabajos",
    twitterTitle: "Trabajos y Proyectos | Benteveo - Creatividad que Impacta",
    twitterDescription: "Descubrí los proyectos creativos y campañas de comunicación que desarrollamos en Benteveo. Historias de marcas que conectan con su audiencia y generan impacto real.",
    twitterImage: "/headerFooter/Logo-Benteveo.webp",
    twitterCard: 'summary_large_image',
});

const { shuffleArray } = useProjects();

const sections = ref([
    { id: "campanas", name: "Campañas" },
    { id: "eventos", name: "Eventos" },
    { id: "tutoriales", name: "Tutoriales" },
    { id: "endomarketing", name: "Endomarketing" }
]);

const allProjects = ref([]);

const eventProjects = computed(() => shuffleArray(allProjects.value.filter(p => p.event)));
const tutorialProjects = computed(() => shuffleArray(allProjects.value.filter(p => p.tutorial)));
const endomarketingProjects = computed(() => shuffleArray(allProjects.value.filter(p => p.endomarketing)));
const regularProjects = computed(() =>
    shuffleArray(allProjects.value.filter(p => !p.event && !p.tutorial && !p.endomarketing))
);

const projectSections = computed(() => [
    { id: "campanas", name: "Campañas", projects: regularProjects.value },
    { id: "eventos", name: "Eventos", projects: eventProjects.value },
    { id: "tutoriales", name: "Tutoriales", projects: tutorialProjects.value },
    { id: "endomarketing", name: "Endomarketing", projects: endomarketingProjects.value }
]);

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        // Obtener la altura del header y del nav dinámicamente
        const header = document.querySelector('header');
        const nav = document.querySelector('.projectContent nav');

        const headerHeight = header ? header.offsetHeight : 0;
        const navHeight = nav ? nav.offsetHeight : 0;
        const offset = headerHeight + navHeight;

        // Obtener la posición del elemento y hacer scroll
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
};


onMounted(() => {
    allProjects.value = [...projects];
});
</script>

<style>
.projectContent {
    position: relative;
}

.projectContent nav {
    position: sticky;
    top: 4.875rem;
    z-index: 10;
    overflow-x: scroll;
    padding: 1.5rem 1rem;
}

nav ul {
    min-width: max-content;
    gap: 3.25rem;
}

nav ul li a {
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
}

@media (width >=480px) {
    .projectContent nav {
        display: flex;
        justify-content: center;
        overflow-x: hidden;
    }
}

@media (width >=660px) {
    .projectContent nav {
        top: 5.5rem;
    }

    nav ul li a {
        font-size: 1rem;
    }
}

@media (width >=850px) {
    .projectContent nav {
        top: 6rem;
    }
}

@media (width >=992px) {
    .projectContent nav {
        top: 6.25rem;
        padding: 2rem;
    }

    nav ul li a:hover {
        color: var(--color-primary) !important;
    }
}

@media (width >=1080px) {
    nav ul li a {
        font-size: 1.25rem;
        transition: all 0.3s;
    }
}
</style>

<style scoped>
.heroSomos {
    background-image: url("/images/somos/Equipo-Benteveo.webp");
}

.subtitle {
    margin-bottom: 2rem;
}

nav ul li a {
    color: var(--color-white);
}

@media (width >=660px) {
    .subtitle {
        margin-bottom: 3.5rem;
    }
}
</style>