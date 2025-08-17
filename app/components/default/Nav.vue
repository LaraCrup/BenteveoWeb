<template>
    <nav :class="{ 'open': isOpen }">
        <div class="yellowLayer" :style="{ transitionDelay: delays.yellowDelay }"></div>
        <div class="blackLayer" :style="{ transitionDelay: delays.blackDelay }"></div>
        <div class="menu">
            <ul>
                <li v-for="(item, index) in menu" :key="index">
                    <NuxtLink :to="item.url" @click="handleClick">{{ item.title }}</NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';

export default {
    data() {
        return {
            menu: [
                {
                    title: "Inicio",
                    url: ROUTE_NAMES.HOME,
                },
                {
                    title: "Somos",
                    url: ROUTE_NAMES.SOMOS,
                },
                {
                    title: "Trabajos",
                    url: ROUTE_NAMES.TRABAJOS,
                },
                {
                    title: "Servicios",
                    url: ROUTE_NAMES.SERVICIOS,
                },
                {
                    title: "Novedades",
                    url: ROUTE_NAMES.NOVEDADES,
                },
                {
                    title: "Conversemos",
                    url: ROUTE_NAMES.CONVERSEMOS,
                },
            ],
            isOpen: false,
            delays: {
                blackDelay: '0.4s',
                yellowDelay: '0s'
            }
        };
    },
    methods: {
        setOpen(value, delays = null) {
            this.isOpen = value;
            if (delays) {
                this.delays = delays;
            }
        },
        handleClick() {
            this.$emit('closeMenu');

            this.setOpen(false, {
                blackDelay: '0.4s',
                yellowDelay: '0.8s'
            });
        }
    }
}
</script>

<style scoped>
nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 8;
    visibility: hidden;
    transition: 0.25s ease-in-out;
}

nav .blackLayer {
    width: 100%;
    height: 100%;
    position: absolute;
    right: -100%;
    top: 0;
    z-index: 3;
    background: #000;
    transition: all 600ms cubic-bezier(0.595, 0.03, 0, 0.88);
    transition-timing-function: cubic-bezier(0.595, 0.03, 0, 0.88);
}

nav .yellowLayer {
    width: 100%;
    height: 100%;
    position: absolute;
    right: -100%;
    top: 0;
    z-index: 2;
    background: var(--color-primary);
    transition: all 600ms cubic-bezier(0.595, 0.03, 0, 0.88);
    transition-timing-function: cubic-bezier(0.595, 0.03, 0, 0.88);
}

nav .menu {
    position: relative;
    z-index: 4;
    text-align: center;
    color: var(--color-white);
    opacity: 0;
    transform: scale(1.1);
    transition: all 600ms cubic-bezier(0.595, 0.03, 0, 0.88);
    transition-timing-function: cubic-bezier(0.595, 0.03, 0, 0.88);
}

nav .menu ul {
    display: block;
    margin: 0;
    padding: 0;
}

nav .menu ul li {
    display: block;
    position: relative;
}

nav .menu ul li a {
    width: max-content;
    display: inline-block;
    position: relative;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--color-white);
    text-decoration: none;
}

nav .menu ul li a::before {
    content: "";
    width: 0;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    background: var(--color-primary);
    transition: 0.25s ease-in-out;
}

nav .menu ul li a:hover {
    text-decoration: none;
}

nav .menu ul li a:hover::before {
    width: 100%;
}

nav.open {
    visibility: visible;
}

nav.open .yellowLayer {
    right: 0;
}

nav.open .blackLayer {
    right: 0;
}

nav.open .menu {
    opacity: 1;
    transition-delay: 0.6s;
    transform: scale(1);
}

@media (width >=660px) {
    nav .menu ul li a {
        font-size: 2rem;
    }
}

@media (width >=992px) {
    nav .menu ul li a {
        font-size: 3rem;
    }

    nav .menu ul li a::before {
        height: 6px;
    }
}
</style>