<template>
    <main>
        <GeoHero />
        <div class="parallaxContent">
            <GeoItinerario />
            <GeoForm />
        </div>
    </main>
</template>

<script setup>
definePageMeta({
    layout: 'landings'
});

useSeoMeta({
    title: "Agencia de publicidad Creativa | Benteveo - Innovación y Estrategia",
    description: "Benteveo es una agencia de publicidad y comunicación que transforma ideas en acciones de marketing. Ofrecemos servicios de creación de contenidos, producción de video, gestión de redes sociales, activaciones y desarrollo web para potenciar las marcas y organizaciones.",
    ogTitle: "Agencia de publicidad Creativa | Benteveo - Innovación y Estrategia",
    ogDescription: "Benteveo es una agencia de publicidad y comunicación que transforma ideas en acciones de marketing. Ofrecemos servicios de creación de contenidos, producción de video, gestión de redes sociales, activaciones y desarrollo web para potenciar las marcas y organizaciones.",
    ogImage: "/images/headerFooter/Logo-Benteveo.webp",
    ogType: "website",
    ogUrl: "https://www.benteveo.com",
    twitterTitle: "Agencia de publicidad Creativa | Benteveo - Innovación y Estrategia",
    twitterDescription: "Benteveo es una agencia de publicidad y comunicación que transforma ideas en acciones de marketing. Ofrecemos servicios de creación de contenidos, producción de video, gestión de redes sociales, activaciones y desarrollo web para potenciar las marcas y organizaciones.",
    twitterImage: "/images/headerFooter/Logo-Benteveo.webp",
    twitterCard: 'summary_large_image',
});

// useSchemaOrg([
//   defineWebPage({
//     name: "Ejemplo",
//     description: "Ejemplo",
//     image: "https://www.benteveo.com/ruta/ejemplo",
//   }),
//   {
//     '@type': 'CreativeWork',
//     name: "Ejemplo",
//     description: "Ejemplo",
//     image: "https://www.benteveo.com/ruta/ejemplo",
//     author: {
//       '@type': 'Organization',
//       name: 'Benteveo',
//       url: 'https://www.benteveo.com'
//     },
//     headline: "Ejemplo",
//     datePublished: new Date().toISOString(),
//     publisher: {
//       '@type': 'Organization',
//       name: 'Benteveo',
//       logo: {
//         '@type': 'ImageObject',
//         url: '/images/headerFooter/Logo-Benteveo.webp'
//       }
//     }
//   }
// ]);
</script>