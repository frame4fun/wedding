<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    classOpen() {
      return {
        open: this.isMenuOpen,
      };
    },
  },
  methods: {
    openCloseMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
</script>

<template>
  <header>
    <nav>
      <a href="#" @click="openCloseMenu"
        ><span class="burger" :class="classOpen"></span
      ></a>
      <ul :class="classOpen" @click="openCloseMenu">
        <li><a href="#">Accueil</a></li>
        <li><a href="#program">Le programme</a></li>
        <li><a href="#place">Le Lieu</a></li>
        <li><a href="#castle-rooms">Les hébergements du château</a></li>
        <li><a href="#other-places">Les hébergements autour du château</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position: fixed;
  z-index: 1;
  right: 0;
}

nav {
  width: 100%;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.burger {
  width: 30px;
  height: 2px;
  background: hsla(var(--pink));
  display: inline-block;
  position: relative;
}

.burger::before,
.burger::after {
  content: '';
  width: 30px;
  height: 2px;
  background: hsla(var(--pink));
  display: inline-block;
  position: absolute;
  transform-origin: center;
  transition: all 0.3s ease;
}
.burger::before {
  top: -7px;
  left: 0;
}
.burger::after {
  top: 7px;
  left: 0;
}

.burger.open {
  background: transparent; /* la barre du milieu disparait */
}
/* celles du haut et du bas s'inclinent pour former une croix */
.burger.open::before {
  transform: rotate(45deg);
  top: 0;
}
.burger.open::after {
  transform: rotate(-45deg);
  top: 0;
}

ul {
  background: hsla(var(--pink));
  position: absolute;
  right: 0;
  top: 100%;
  transform: scaleX(0);
  transform-origin: right center;
  transition: all 0.3s ease;
  list-style-type: none;
  padding: 0;
  min-width: 300px;
}
ul.open {
  transform: scaleX(1);
}
ul li {
  padding: 10px 0;
  text-align: center;
  text-decoration: none;
}

ul li a {
  color: hsla(var(--white));
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  padding: 10px 0;
  text-align: center;
  text-decoration: none;
}

@media (hover: hover) {
  ul li a:hover {
    color: var(--color-link-hover);
  }
}

@media (min-width: 1024px) {
  nav {
    padding: 2rem;
  }
}
</style>
