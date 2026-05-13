<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: 'es' },
})

useSchemaOrg([
  defineOrganization({
    name: 'Benteveo',
    url: 'https://www.benteveo.com',
    logo: 'https://www.benteveo.com/images/headerFooter/Logo-Benteveo.webp',
    sameAs: [
      'https://www.instagram.com/benteveocomunicacion/',
      'https://www.linkedin.com/company/benteveo-comunicacion/',
    ],
  }),
  defineWebSite({
    name: 'Benteveo',
    url: 'https://www.benteveo.com',
    inLanguage: 'es-AR',
  }),
])
</script>
