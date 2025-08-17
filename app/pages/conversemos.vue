<template>
    <main>
        <PagesHero title="HABLEMOS DE TU PRÓXIMO GRAN PROYECTO"
            description="Trabajemos para hacerlo único, relevante y memorable." backgroundClass="heroSomos"
            heroVideo="conversemos/conversemos-contacto-benteveo-producciones" />
        <div class="parallaxContent">
            <section class="column bg-white">
                <div class="w-full column">
                    <h2 class="column">¡Queremos construir juntos! <span>Dejanos tus datos de contacto.</span></h2>
                    <ConversemosDatosContacto />
                </div>
                <ConversemosFormContacto />
            </section>
        </div>
    </main>
</template>

<script setup>
useSeoMeta({
    title: "Conversemos | Contactanos en Benteveo",
    description: "¿Querés impulsar tu marca? Escribinos. En Benteveo creamos soluciones creativas a medida para potenciar tu comunicación y tus resultados.",
    ogTitle: "Conversemos | Contactanos en Benteveo",
    ogDescription: "¿Querés impulsar tu marca? Escribinos. En Benteveo creamos soluciones creativas a medida para potenciar tu comunicación y tus resultados.",
    ogImage: "/images/headerFooter/Logo-Benteveo.webp",
    ogType: "website",
    ogUrl: "https://www.benteveo.com/conversemos",
    twitterTitle: "Conversemos | Contactanos en Benteveo",
    twitterDescription: "¿Querés impulsar tu marca? Escribinos. En Benteveo creamos soluciones creativas a medida para potenciar tu comunicación y tus resultados.",
    twitterImage: "/images/headerFooter/Logo-Benteveo.webp",
    twitterCard: 'summary_large_image',
});
</script>


<style>
</style>

<style scoped>
section,
section>div,
section>div>div {
    gap: 1.5rem;
}

@media (width >=660px) {
    section {
        flex-direction: row;
        gap: 0;
    }

    section>div,
    section>div>div {
        gap: 2rem;
    }
}

@media (width >=1080px) {

    section>div,
    section>div>div {
        gap: 2.75rem;
    }

    .parallaxContent section>div {
        width: 52% !important;
    }

}
</style>