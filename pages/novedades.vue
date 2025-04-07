<template>
    <main>
        <PagesHero title="SIEMPRE EN MOVIMIENTO"
            description="Las últimas noticias, campañas y tendencias que nos inspiran a seguir creando." heroVideo="novedades/novedades-blog-benteveo-agencia" />
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