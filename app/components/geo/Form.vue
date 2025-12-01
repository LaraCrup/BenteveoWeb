<template>
    <section class="bg-blue-red">
        <div class="column">
            <div class="columnAlignCenter">
                <h2>Los consumidores están cambiando su forma de buscar. Te invitamos a un desayuno de networking para
                    anticiparte al cambio.</h2>
                <p class="subtitle">
                    Registrate completando el formulario
                    a continuación para recibir la invitación exclusiva al evento.
                </p>
                <a href="https://maps.app.goo.gl/cAHTukBY7XohB95t9" target="_blank" class="evento">
                    <p>11 de diciembre · 9:30 hs · AZAI Espacio Culinario</p>
                </a>
            </div>
            <form v-if="!showSuccessDialog" id="formGeo" @submit.prevent="handleSubmit"
                class="formGeo columnAlignCenter">
                <div class="formGroup">
                    <label for="nombre">Nombre y Apellido</label>
                    <div class="inputWrapper">
                        <Icon name="mingcute:user-3-line" class="inputIcon" />
                        <input type="text" id="nombre" v-model="formData.nombre"
                            placeholder="Escribe tu nombre completo" />
                    </div>
                    <div class="error">
                        <span v-if="errors.nombre">
                            <Icon name="mingcute:alert-octagon-line" />
                            {{ errors.nombre }}
                        </span>
                    </div>
                </div>

                <div class="formGroup">
                    <label for="empresa">Empresa</label>
                    <div class="inputWrapper">
                        <Icon name="mingcute:briefcase-2-line" class="inputIcon" />
                        <input type="text" id="empresa" v-model="formData.empresa"
                            placeholder="Escribe el nombre de tu empresa" />
                    </div>
                    <div class="error">
                        <span v-if="errors.empresa">
                            <Icon name="mingcute:alert-octagon-line" />
                            {{ errors.empresa }}
                        </span>
                    </div>
                </div>

                <div class="formGroup">
                    <label for="whatsapp">WhatsApp</label>
                    <div class="inputWrapper">
                        <Icon name="mingcute:whatsapp-line" class="inputIcon" />
                        <input type="text" id="whatsapp" v-model="formData.whatsapp"
                            placeholder="Escribe tu número de contacto" />
                    </div>
                    <div class="error">
                        <span v-if="errors.whatsapp">
                            <Icon name="mingcute:alert-octagon-line" />
                            {{ errors.whatsapp }}
                        </span>
                    </div>
                </div>

                <button type="submit" :disabled="isLoading" class="landingButton">
                    <span v-if="isLoading" class="loader"></span>
                    <span v-else>Registrarme</span>
                </button>
            </form>

            <div v-else class="successContainer allCenter">
                <NuxtImg src="/images/geo/Form-Enviado.svg" alt="Form Enviado" />
                <p>Muchas gracias por registrarte</p>
                <p>A la brevedad estaremos enviandote la invitación a tu número de WhatsApp</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const supabase = useSupabaseClient()

const formData = ref({
    nombre: '',
    empresa: '',
    whatsapp: ''
})

const errors = ref({
    nombre: '',
    empresa: '',
    whatsapp: ''
})

const isLoading = ref(false)
const showSuccessDialog = ref(false)

const validateNombre = () => {
    if (!formData.value.nombre) {
        errors.value.nombre = 'Debes ingresar tu nombre y apellido'
        return false
    }
    if (formData.value.nombre.length < 3) {
        errors.value.nombre = 'El nombre debe tener al menos 3 caracteres'
        return false
    }
    if (formData.value.nombre.length > 50) {
        errors.value.nombre = 'El nombre no puede superar los 50 caracteres'
        return false
    }
    return true
}

const validateEmpresa = () => {
    if (!formData.value.empresa) {
        errors.value.empresa = 'Debes ingresar tu empresa'
        return false
    }
    if (formData.value.empresa.length < 2) {
        errors.value.empresa = 'El nombre de la empresa debe tener al menos 2 caracteres'
        return false
    }
    if (formData.value.empresa.length > 40) {
        errors.value.empresa = 'El nombre de la empresa no puede superar los 40 caracteres'
        return false
    }
    return true
}

const validateWhatsapp = () => {
    if (!formData.value.whatsapp) {
        errors.value.whatsapp = 'Debes ingresar tu número de WhatsApp'
        return false
    }
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(formData.value.whatsapp)) {
        errors.value.whatsapp = 'El número de WhatsApp no es válido'
        return false
    }
    if (formData.value.whatsapp.replace(/\D/g, '').length < 10) {
        errors.value.whatsapp = 'El número debe tener al menos 10 dígitos'
        return false
    }
    return true
}

const handleSubmit = async () => {
    Object.keys(errors.value).forEach(key => errors.value[key] = '')

    const nombreValid = validateNombre()
    const empresaValid = validateEmpresa()
    const whatsappValid = validateWhatsapp()

    if (nombreValid && empresaValid && whatsappValid) {
        isLoading.value = true
        try {
            const { error } = await supabase
                .from('evento-geo')
                .insert([
                    {
                        'nombre-apellido': formData.value.nombre,
                        empresa: formData.value.empresa,
                        whatsapp: formData.value.whatsapp
                    }
                ])

            if (error) {
                throw new Error(error.message || 'Error al guardar los datos')
            }

            showSuccessDialog.value = true

            formData.value.nombre = ''
            formData.value.empresa = ''
            formData.value.whatsapp = ''
        } catch (error) {
            console.error('Error:', error)
            alert('Hubo un error al registrarse. Por favor, intenta de nuevo.')
        } finally {
            isLoading.value = false
        }
    }
}
</script>

<style scoped>
* {
    font-family: "Lato", serif;
}

section>div {
    gap: 1.5rem;
    padding: 2.5rem 1rem;
}

section>div>div:first-of-type {
    gap: 0.75rem;
}

h2 {
    text-align: center;
    font-size: 1.25rem;
    color: var(--color-dark-black);
    font-weight: bold;
}

.subtitle {
    text-align: center;
    font-size: 0.875rem;
    color: var(--color-dark-black);
    font-weight: 500;
}

.evento {
    background-color: var(--color-dark-black);
    border-radius: 999px;
    color: var(--color-white);
    text-decoration: none;
    padding: 0.75rem;
}

form {
    width: 100%;
    gap: 0.5rem;
    background-color: var(--color-white);
    border-radius: 18px;
    padding: 1rem;
}

.formGroup {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

label {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-dark-black);
    padding-left: 0.75rem;
}

.inputWrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.inputIcon {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    left: 0.75rem;
    color: var(--color-dark-black);
    pointer-events: none;
}

.formGroup input {
    width: 100%;
    border: 2px solid var(--color-dark-black);
    border-radius: 9px;
    font-size: 0.75rem;
    padding: 0.75rem 0.75rem 0.75rem 2.5rem;
}

.formGroup input::placeholder {
    color: var(--color-dark-black);
}

.formGroup input:focus-visible {
    outline: none;
}

form button {
    width: 100%;
    font-size: 1rem;
    padding: 0.875rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.loader {
    width: 1.25rem;
    height: 1.25rem;
    display: inline-block;
    border: 2px solid var(--color-white);
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

.error {
    min-height: 1rem;
    color: var(--color-red);
    font-size: 0.75rem;
}

.error span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.error span span {
    width: 0.75rem;
    height: 0.75rem;
}

.successContainer {
    width: 100%;
    min-height: 19rem;
    gap: 1rem;
    background-color: var(--color-white);
    border-radius: 18px;
    padding: 1rem;
}

.successContainer img {
    width: 4rem;
    height: 4rem;
}

.successContainer p:first-of-type {
    font-size: 1.25rem;
    font-weight: bold;
}

.successContainer p {
    text-align: center;
    color: var(--color-dark-black);
    font-size: 0.875rem;
    font-weight: 500;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@media (width >=768px) {
    section>div {
        gap: 2rem;
        flex-direction: row;
        align-items: center;
        padding: 2rem 2.5rem;
    }

    section>div>div:first-of-type {
        gap: 1rem;
        align-items: flex-start;
    }

    h2,
    .subtitle {
        text-align: start;
    }

    .evento {
        padding: 1rem 1.25rem;
    }

    .evento p {
        font-size: 0.75rem;
    }

    form,
    .successContainer {
        width: 20.5rem;
        flex-shrink: 0;
        padding: 1.5rem;
    }

    .formGroup input {
        height: 3rem;
    }

    form button {
        width: max-content;
    }
}

@media (width >=1080px) {
    section>div {
        gap: 4.75rem;
        padding: 3rem 4rem;
    }

    section>div>div:first-of-type {
        width: 51%;
        gap: 1.5rem;
    }

    h2 {
        font-size: 1.75rem;
    }

    .subtitle {
        font-size: 1.5rem;
    }

    .evento {
        padding: 1rem 1.5rem;
    }

    .evento p {
        font-size: 1.25rem;
    }

    form,
    .successContainer {
        width: 40%;
        border-radius: 36px;
        padding: 2rem;
    }

    .formGroup {
        gap: 0.5rem;
    }

    label {
        font-size: 1rem;
    }

    .formGroup input,
    .error span {
        font-size: 0.875rem;
    }

    .error span span {
        width: 1rem;
        height: 1rem;
    }

    .successContainer img {
        width: 6rem;
        height: 6rem;
    }

    .successContainer p:first-of-type {
        font-size: 1.75rem;
    }

    .successContainer p {
        font-size: 1.5rem;
    }
}

@media (width >=1440px) {
    section {
        padding: 4rem;
    }

    section>div {
        max-width: 1440px;
        gap: 7.25rem;
        padding: 0;
    }

    h2 {
        font-size: 1.75rem;
    }

    .successContainer {
        padding: 2.5rem 2rem;
    }
}
</style>