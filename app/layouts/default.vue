<template>
  <ClientOnly>
    <div class="layout">
      <DefaultHeader />
      <slot />
      <DefaultFooter />
    </div>
  </ClientOnly>
</template>

<script setup>
const route = useRoute()

const setupScrollOpacity = () => {
  const heroDiv = document.querySelector('.heroContainer')
  if (!heroDiv) return

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    heroDiv.style.opacity = Math.max(0, 1 - scrollTop / 500)
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}

onMounted(setupScrollOpacity)
watch(() => route.path, setupScrollOpacity)
</script>

<style scoped>
.heroContainer {
  transition: opacity 0.2s ease;
}
</style>