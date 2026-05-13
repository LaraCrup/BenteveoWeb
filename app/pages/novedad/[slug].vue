<template>
    <main class="novedad">
        <section class="heroContainer bgCover" :style="{ backgroundImage: `url('/images/blogs/${blog.slug}.webp')` }">
            <div class="hero column">
                <div class="column">
                    <h1>
                        {{ blog.title }}
                    </h1>
                </div>
                <DefaultSocialMedia />
                <DefaultScroll />
            </div>
        </section>
        <div class="parallaxContent">
            <section class="bg-white">
                <div class="blogContainer">
                    <article v-if="blog" class="blogContent columnAlignCenter">
                        <div class="w-full author column">
                            <div class="rowCenter">
                                <NuxtImg :src="`/images/blogs/${author.image}.webp`" :alt="author.name" />
                                <p>by <span>{{ author.name }}</span></p>
                            </div>
                            <time>{{ blog.date }}</time>
                        </div>
                        <div v-html="blog.content"></div>
                    </article>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';
import { blogs } from '~/shared/blogs';
import { writters } from '~/shared/writters';

const route = useRoute();
const router = useRouter();

const blog = ref(null);

blog.value = blogs.find(b => b.slug === route.params.slug);

const author = computed(() => {
    if (!blog.value) return { name: 'Autor desconocido', image: 'author' };
    return writters.find(writer => writer.id === blog.value.authorId) || {
        name: 'Autor desconocido',
        image: 'author'
    };
});

onMounted(() => {
    if (!blog.value) {
        router.push(ROUTE_NAMES.NOVEDADES);
    }
});

useSeoMeta({
    title: () => `${blog.value?.title} | Benteveo - Blog`,
    description: () => blog.value?.summary,
    ogTitle: () => `${blog.value?.title} | Benteveo - Blog`,
    ogDescription: () => blog.value?.summary,
    ogImage: () => `/images/blogs/${blog.value?.slug}.webp`,
    ogUrl: () => `https://www.benteveo.com/novedad/${blog.value?.slug}`,
    twitterTitle: () => `${blog.value?.title} | Benteveo - Blog`,
    twitterDescription: () => blog.value?.summary,
    twitterImage: () => `/images/blogs/${blog.value?.slug}.webp`,
    twitterCard: 'summary_large_image',
});

useSchemaOrg([
    defineWebPage({
        name: () => blog.value?.title,
        description: () => blog.value?.summary,
        image: () => `https://www.benteveo.com/images/blogs/${blog.value?.slug}.webp`,
    }),
    {
        '@type': 'CreativeWork',
        name: () => blog.value?.title,
        description: () => blog.value?.summary,
        image: () => `https://www.benteveo.com/images/blogs/${blog.value?.slug}.webp`,
        author: {
            '@type': 'Organization',
            name: 'Benteveo',
            url: 'https://www.benteveo.com'
        },
        headline: () => blog.value?.subtitle,
        datePublished: new Date().toISOString(),
        publisher: {
            '@type': 'Organization',
            name: 'Benteveo',
            logo: {
                '@type': 'ImageObject',
                url: '/images/headerFooter/Logo-Benteveo.webp'
            }
        }
    }
]);
</script>

<style>
.blogContent>div:last-child,
.blogContent ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.blogContent h3 {
    margin-top: 0.5rem;
}

.blogContent p span,
.blogContent li span {
    font-weight: bold;
}

.blogContent ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.blogContent ul li {
    list-style: disc;
    list-style-position: inside;
}

.blogContent .smallList {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin: 0.5rem 0;
}

@media (width >=1080px) {

    .blogContent>div:last-child,
    .blogContent ol {
        gap: 2rem;
    }

    .blogContent h3 {
        margin-top: 1rem;
    }

    .blogContent .smallList {
        gap: 0.5rem;
        margin: 1rem 0;
    }
}
</style>

<style scoped>
.hero {
    background: rgba(0, 0, 0, 0.5);
}

h1 {
    max-width: 900px;
}

.blogContent {
    width: 100%;
    max-width: 1000px;
    gap: 2rem;
    margin: 0 auto;
}

.author,
.author div {
    gap: 0.5rem;
}

.author img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
}

@media (width >=1440px) {
    h1 {
        max-width: 1200px;
    }
}
</style>