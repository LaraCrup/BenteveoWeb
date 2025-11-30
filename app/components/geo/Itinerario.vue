<template>
    <section class="bg-dark-black">
        <div class="column">
            <div>
                <h2 class="gradient-text">¿Cómo está tu marca en el menú de la IA?</h2>
                <p>
                    Un desayuno exclusivo para entender la nueva receta del GEO.
                </p>
            </div>
            <div class="pasos column">
                <div v-for="(paso, index) in pasos" :key="index" class="paso column">
                    <h3 class="gradient-text">{{ paso.title }}</h3>
                    <ul class="column">
                        <li v-for="(item, index) in paso.list" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const pasos = [
    {
        title: "Parte 1: El nuevo menú de la visibilidad",
        list: [
            "Cómo está cambiando las búsquedas de los usuarios",
            "La caída del tráfico a las páginas webs",
            "La IA como nuevo generador de respuestas",
            "Qué variables hacen que una marca aparezca o quede afuera",
        ],
    },
    {
        title: "Parte 2: La nueva receta del GEO",
        list: [
            "Cómo convertirse en una fuente que la IA quiera citar",
            "Qué evalúan los principales LLMs: ChatGPT, Gemini, Perplexity y Copilot",
            "Estructura, formato, datos y autoridad (los verdaderos ingredientes)",
            "Cómo implementamos una estrategia GEO",
            "Herramientas y métricas",
        ],
    },
];
</script>

<style scoped>
* {
    font-family: "Lato", serif;
}

section>div {
    gap: 1.5rem;
    padding: 2.5rem 1rem;
}

section>div div:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
}

section>div div:first-of-type p {
    font-size: 1rem;
    font-weight: 500;
}

h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
}

.pasos {
    gap: 0.75rem;
}

.paso {
    gap: 1rem;
    border: 1px solid var(--color-dark-gray);
    border-radius: 18px;
    padding: 1.5rem 1rem;
}

.paso h3 {
    text-align: start;
    font-size: 1.25rem;
    font-weight: bold;
}

.paso ul {
    gap: 0.75rem;
    padding-left: 1rem
}

.paso ul li {
    text-align: start;
    font-size: 0.875rem;
    font-weight: 500;
    list-style: disc;
}
</style>