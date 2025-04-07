<template>
    <main>
        <PagesHero title="SIEMPRE EN MOVIMIENTO"
            description="Las últimas noticias, campañas y tendencias que nos inspiran a seguir creando."
            heroVideo="novedades/novedades-blog-benteveo-agencia" />
        <div class="parallaxContent">
            <section class="bg-white">
                <div class="blogsContainer wrapSpaceBetween">
                    <NovedadesBlogPost v-for="(post, index) in blogs" :key="index" :post="post" />
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { blogs } from '~/shared/blogs';

export default {
    data() {
        return {
            blogs: blogs
        }
    }
}

useSeoMeta({
    title: "Novedades y Tendencias | Blog de Benteveo",
    description: "Inspirate con ideas, tendencias de marketing, creatividad, casos de éxito y novedades del mundo de la comunicación. El blog de Benteveo es tu aliado creativo.",
    ogTitle: "Novedades y Tendencias | Blog de Benteveo",
    ogDescription: "Inspirate con ideas, tendencias de marketing, creatividad, casos de éxito y novedades del mundo de la comunicación. El blog de Benteveo es tu aliado creativo.",
    ogImage: "/headerFooter/Logo-Benteveo.webp",
    ogType: "website",
    ogUrl: "https://www.benteveo.com/novedades",
    twitterTitle: "Novedades y Tendencias | Blog de Benteveo",
    twitterDescription: "Inspirate con ideas, tendencias de marketing, creatividad, casos de éxito y novedades del mundo de la comunicación. El blog de Benteveo es tu aliado creativo.",
    twitterImage: "/headerFooter/Logo-Benteveo.webp",
    twitterCard: 'summary_large_image',
});
</script>

<style scoped>
.blogsContainer {
    justify-content: center;
    gap: 4.5rem;
}

@media (width >=1080px) {
    .blogsContainer article {
        max-width: 100%;
        width: 46%;
    }
}
</style>