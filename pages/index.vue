<template>
  <main>
    <HomeHero />
    <div class="parallaxContent">
      <HomeProjects />
      <HomeClients />
      <HomeHacemos />
      <HomeServices />
    </div>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Ejemplo | Benteveo - Blog",
  description: "Ejemplo",
  ogTitle: "Ejemplo | Benteveo - Blog",
  ogDescription: "Ejemplo",
  ogImage: "/ruta/ejemplo",
  ogUrl: "https://benteveo.com",
  twitterTitle: "Ejemplo | Benteveo - Blog",
  twitterDescription: "Ejemplo",
  twitterImage: "/ruta/ejemplo",
  twitterCard: 'summary_large_image',
});

useSchemaOrg([
  defineWebPage({
    name: "Ejemplo",
    description: "Ejemplo",
    image: "https://benteveo.com/ruta/ejemplo",
  }),
  {
    '@type': 'CreativeWork',
    name: "Ejemplo",
    description: "Ejemplo",
    image: "https://benteveo.com/ruta/ejemplo",
    author: {
      '@type': 'Organization',
      name: 'Benteveo',
      url: 'https://benteveo.com'
    },
    headline: "Ejemplo",
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