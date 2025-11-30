<template>
    <footer>
        <div class="columnAlignCenter">
            <NuxtLink :to="ROUTE_NAMES.HOME">
                <NuxtImg class="logo" src="/images/headerFooter/Logo-Benteveo.webp" alt="Logo Benteveo" />
            </NuxtLink>
        </div>
    </footer>
</template>

<script setup>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';

</script>