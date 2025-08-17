<template>
    <section>
        <div class="premiosSectores column">
            <div class="column">
                <h3>Premios</h3>
                <ul class="column">
                    <li v-for="premio in premios" :key="premio" class="text-gray">{{ premio }}</li>
                </ul>
            </div>
            <div class="column">
                <h3>Sectores</h3>
                <ul class="column">
                    <li v-for="sector in sectores" :key="sector" class="text-gray">{{ sector }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            premios: ["2022 - Premios FePI", "2020 - Premios Lápiz de Platino", "2020 - Campañas Social Media - Premios Eikon", "2017 - Campaña digital - Premio Promax", "2016 - Premios Buenos Anuncios", "2015 - Campaña bien público - Premios Consejo Publicitario Argentino", "2014 - Premios Diente"],
            sectores: ["Consumo masivo: Alimentos y Bebidas", "Construcción y Herramientas", "Entretenimiento y Medios", "Tecnología", "Retail y Comercio", "Turismo", "Farmacéutica", "E-commerce y ventas en línea"],
        }
    }
}
</script>≈

<style scoped>
section{
    background-color: var(--color-dark-black);
}

.premiosSectores {
    gap: 2rem;
}

.premiosSectores>div {
    gap: 0.75rem;
}

.premiosSectores>div>ul {
    gap: 0.5rem;
}

@media (width >=480px) {
    .premiosSectores {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .premiosSectores > div {
        width: 45%;
    }
}

@media (width >=850px) {
    .premiosSectores > div {
        width: 47.5%;
        flex-direction: row;
        gap: 1.5rem;
    }
}

@media (width >=1080px) {
    .premiosSectores {
        justify-content: flex-start;
        gap: 5rem;
    }

    .premiosSectores > div {
        width: max-content;
    }
}

@media (width >=1280px) {
    .premiosSectores {
        gap: 8rem;
    }
}

@media (width >=1440px) {
    .premiosSectores {
        gap: 12rem;
    }
}
</style>