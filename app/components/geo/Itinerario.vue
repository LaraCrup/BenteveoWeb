<template>
    <section class="bg-dark-black">
        <div class="column">
            <div>
                <h2 class="gradient-text">¿Cómo está tu marca en el menú de la IA?</h2>
                <p class="subtitle">
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

h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
}

.subtitle {
    font-size: 1rem;
    font-weight: 500;
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

@media (width >=768px) {
    section>div {
        gap: 2rem;
        padding: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    .subtitle {
        font-size: 1.25rem;
    }

    .pasos {
        flex-direction: row;
        gap: 2rem;
    }

    .paso {
        width: 50%;
        padding: 1.5rem;
    }
}

@media (width >=1080px) {
    section>div {
        gap: 3rem;
        padding: 3rem 4rem;
    }

    h2 {
        font-size: 2.25rem;
    }

    .subtitle {
        font-size: 1.75rem;
    }

    .paso {
        border-radius: 36px;
        padding: 3rem;
    }

    .paso h3 {
        max-width: 17.25rem;
        font-size: 1.75rem;
    }

    .paso ul li {
        font-size: 1.5rem;
    }
}

@media (width >=1440px) {
    section>div {
        gap: 4rem;
        padding: 4rem;
    }

    .paso {
        padding: 4rem;
    }

    .paso h3 {
        max-width: 100%;
    }

    .paso ul li {
        font-size: 1.5rem;
    }
}
</style>