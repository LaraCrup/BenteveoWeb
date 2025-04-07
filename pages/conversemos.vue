<template>
    <main>
        <PagesHero title="HABLEMOS DE TU PRÓXIMO GRAN PROYECTO"
            description="Trabajemos para hacerlo único, relevante y memorable." backgroundClass="heroSomos" heroVideo="" />
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

<style>
.p-dialog-mask {
    background: rgba(0, 0, 0, 0.4) !important;
}

.p-dialog {
    width: 100%;
    max-width: 264px;
    position: relative;
    background: var(--color-white) !important;
    border: 2px solid var(--color-primary) !important;
    color: var(--color-black) !important;
    padding: 1.25rem;
}

.p-dialog-header {
    justify-content: flex-end !important;
    position: absolute;
    top: 0.875rem;
    right: 0.875rem;
}

.p-dialog-header-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none !important;
    border: none !important;
    cursor: pointer;
}

.p-dialog-header .p-icon {
    color: var(--color-primary);
}

.dialogContent {
    gap: 0.5rem;
}

.closeButton {
    background: var(--color-primary);
    color: var(--color-white);
    border: none;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    cursor: pointer;
    align-self: center;
}

.closeButton:hover {
    opacity: 0.9;
}

@media (width >=660px) {
    .p-dialog {
        max-width: 484px;
        padding: 1.75rem;
    }

    .p-dialog-header {
        top: 1rem;
        right: 1rem;
    }

    .p-dialog-header .p-icon {
        width: 1rem;
        height: 1rem;
    }

    .dialogContent {
        gap: 1rem;
    }

    .dialogContent p {
        font-size: 1rem;
    }
}

@media (width >=1080px) {
    .p-dialog {
        max-width: 615px;
        padding: 2.25rem;
    }

    .p-dialog-header {
        top: 1.25rem;
        right: 1.25rem;
    }

    .p-dialog-header .p-icon {
        width: 1.25rem;
        height: 1.25rem;
    }

    .dialogContent {
        gap: 1.5rem;
    }

    .dialogContent p {
        font-size: 1.25rem;
    }
}
</style>

<style scoped>
section,
section>div,
section>div>div{
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