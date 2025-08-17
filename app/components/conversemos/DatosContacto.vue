<template>
    <div class="datosContacto column">
        <div>
            <a href="mailto:hola@benteveo.com" class="rowCenter text-black no-underline">
                <Icon name="mingcute:mail-line" class="text-primary" />
                hola@benteveo.com
            </a>
        </div>
        <div class="addressFooter column">
            <div v-for="(location, index) in locations" :key="index" class="flex">
                <Icon name="mingcute:location-line" class="text-primary" />
                <div>
                    <p v-for="(line, lineIndex) in location.lines" :key="lineIndex">
                        {{ line }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            locations: [
                {
                    lines: [
                        'Guatemala 5582 Piso 2',
                        'Buenos Aires, Argentina',
                        '+54 11 5254 7363'
                    ]
                },
                {
                    lines: [
                        '152 Southwest 14th Avenue',
                        'Miami, Florida, United States',
                        '+1 305 900 4934'
                    ]
                },
                {
                    lines: [
                        'Amunategui 86 Of. 801',
                        'Santiago, Chile'
                    ]
                },
                {
                    lines: [
                        'Int. Suarez 161',
                        'Colonia, Uruguay'
                    ]
                }
            ],
        }
    }
}
</script>

<style scoped>
.addressFooter {
    gap: 1.5rem;
}

.datosContacto a,
.datosContacto .addressFooter div {
    gap: 0.625rem;
}

.datosContacto a,
.datosContacto .addressFooter p {
    font-family: "Fjalla One", sans-serif;
}

@media (width >=660px) {
    .addressFooter {
        gap: 2rem;
    }
}

@media (width >=1080px) {
    .addressFooter {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2.5rem;
    }

    .addressFooter>div {
        width: 45%;
    }
}
</style>