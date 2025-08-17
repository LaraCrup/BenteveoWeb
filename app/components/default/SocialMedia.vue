<template>
  <ul class="socialMedia rowCenter">
    <li v-for="(media, index) in socialMedia" :key="index">
      <a :href="media.link" :aria-label="`Ir a ${media.icon}`" target="_blank">
        <Icon :name="`mdi:${media.icon}`" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      socialMedia: [
        {
          link: "https://www.facebook.com/BenteveoCoworkers/",
          icon: "facebook",
        },
        {
          link: "https://www.instagram.com/benteveo_coworkers/",
          icon: "instagram",
        },
        {
          link: "https://vimeo.com/benteveo",
          icon: "vimeo",
        },
        {
          link: "https://www.linkedin.com/company/benteveo/",
          icon: "linkedin",
        },
      ],
    }
  }
}
</script>

<style scoped>
.socialMedia {
  gap: 0.625rem;
}

.socialMedia a span {
  color: var(--color-white);
  transition: 0.25s ease-in-out;
}

.socialMedia a span:hover {
  color: var(--color-primary);
}

@media (width >=660px) {
  .socialMedia {
    gap: 1rem;
  }

  .socialMedia a span {
    font-size: 1.25rem !important;
  }
}

@media (width >= 992px) {
  .socialMedia {
    gap: 1.25rem;
  }

  .socialMedia a span {
    font-size: 1.5rem !important;
  }
}
</style>