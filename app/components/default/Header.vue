<template>
  <header class="rowSpaceBetweenCenter bg-dark-black">
    <div class="w-full rowSpaceBetweenCenter">
      <div class="logoEmailUs rowCenter">
        <div>
          <NuxtLink :to="routes.HOME">
            <NuxtImg class="logo" src="/images/headerFooter/Logo-Benteveo.webp" alt="Logo Benteveo" />
          </NuxtLink>
        </div>
        <div class="emailUs rowCenter">
          <p>Decí <a href="#" class="text-dark-gray">hola@benteveo.com</a></p>
        </div>
      </div>
      <div class="sandwichNav rowCenter">
        <p>MENU</p>
        <button aria-label="Open Menu" class="allCenter" :class="{ 'open': isMenuOpen }" @click="toggleMenu">
          <Icon :name="isMenuOpen ? 'mingcute:close-fill' : 'mingcute:menu-line'"
            :class="isMenuOpen ? 'text-black' : 'text-white'" />
        </button>
      </div>
    </div>
    <DefaultNav ref="nav" @closeMenu="toggleMenu" />
  </header>
</template>

<script>
import { ROUTE_NAMES } from "~/constants/ROUTE_NAMES";

export default {
  data() {
    return {
      routes: ROUTE_NAMES,
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.classList.toggle('overflow', this.isMenuOpen);

      if (this.$refs.nav) {
        this.$refs.nav.setOpen(this.isMenuOpen, {
          blackDelay: this.isMenuOpen ? '0.4s' : '0.4s',
          yellowDelay: this.isMenuOpen ? '0s' : '0.8s'
        });
      }
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1.25rem 1rem;
}

.logoEmailUs {
  gap: 1.875rem;
}

.emailUs {
  display: none;
}

.sandwichNav {
  gap: 0.625rem;
}

.sandwichNav p {
  font-family: "Fjalla One", sans-serif;
}

.sandwichNav button {
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 999px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: none;
  cursor: pointer;
}

.sandwichNav button span {
  font-size: 1.25rem !important;
}

.sandwichNav button.open {
  background-color: var(--color-white);
  border-color: var(--color-white);
}

@media (width >=660px) {
  header {
    padding: 1.5rem 1.875rem;
  }

  .emailUs {
    display: flex;
  }

  .sandwichNav button {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (width >=850px) {
  header {
    padding: 1.75rem 2.5rem;
  }

  .logoEmailUs {
    gap: 2rem;
  }

  .sandwichNav {
    gap: 0.875rem;
  }
}

@media (width >=992px) {
  header {
    padding: 1.75rem 3.75rem;
  }

  .sandwichNav button {
    width: 2.75rem;
    height: 2.75rem;
  }
}

@media (width >=1440px) {
  header {
    padding: 2rem 5.625rem;
  }
}

@media (width >=1920px){
  .sandwichNav p {
  font-size: 1.5rem;
  }
}
</style>
