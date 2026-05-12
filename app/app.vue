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
    url: 'https://benteveo.com',
    logo: 'https://benteveo.com/images/headerFooter/Logo-Benteveo.webp',
    sameAs: [
      'https://www.instagram.com/benteveocomunicacion/',
      'https://www.linkedin.com/company/benteveo-comunicacion/',
    ],
  }),
  defineWebSite({
    name: 'Benteveo',
    url: 'https://benteveo.com',
    inLanguage: 'es-AR',
  }),
])
</script>
