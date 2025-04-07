<template>
    <main>
        <PagesHero title="SOLUCIONES QUE TRANSFORMAN"
            description="Desde la idea hasta la ejecución, ofrecemos estrategias creativas para llevar tu marca más lejos."
            backgroundClass="heroSomos"
            heroVideo="servicios/servicios-agencia-productora-comunicacion-entretenimiento" />
        <div class="parallaxContent">
            <ServiciosCapacidades />
            <ServiciosEquipo />
        </div>
    </main>
</template>

<script setup>
useSeoMeta({
    title: "Servicios de Publicidad y Comunicación | Benteveo",
    description: "Conocé nuestros servicios de publicidad, contenido, redes sociales, activaciones, producción audiovisual y desarrollo web. Soluciones creativas pensadas para potenciar tu marca.",
    ogTitle: "Servicios de Publicidad y Comunicación | Benteveo",
    ogDescription: "Conocé nuestros servicios de publicidad, contenido, redes sociales, activaciones, producción audiovisual y desarrollo web. Soluciones creativas pensadas para potenciar tu marca.",
    ogImage: "/images/headerFooter/Logo-Benteveo.webp",
    ogType: "website",
    ogUrl: "https://www.benteveo.com/servicios",
    twitterTitle: "Servicios de Publicidad y Comunicación | Benteveo",
    twitterDescription: "Conocé nuestros servicios de publicidad, contenido, redes sociales, activaciones, producción audiovisual y desarrollo web. Soluciones creativas pensadas para potenciar tu marca.",
    twitterImage: "/images/headerFooter/Logo-Benteveo.webp",
    twitterCard: 'summary_large_image',
});
</script>


<style scoped>
.heroSomos {
    background-image: url("/images/somos/Equipo-Benteveo.webp");
}
</style>