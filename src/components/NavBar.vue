<script setup lang="ts"></script>

<script lang="ts">
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  computed: {
    classOpen() {
      return {
        open: this.isMenuOpen,
      };
    },
  },
};
</script>

<template>
  <header>
    <nav>
      <a href="#" @click="openMenu"
        ><span class="burger" :class="classOpen"></span
      ></a>
      <ul :class="classOpen">
        <li><a href="#">Accueil</a></li>
        <li><a href="#place">Le Lieu</a></li>
        <li><a href="#sleep">Où dormir ?</a></li>
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
  width: 100%;
}

nav {
  width: 100%;
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.burger {
  width: 30px;
  height: 2px;
  background: var(--color-text);
  display: inline-block;
  position: relative;
}

.burger::before,
.burger::after {
  content: "";
  width: 30px;
  height: 2px;
  background: var(--color-text);
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
  background: var(--background-color);
  position: absolute;
  width: 50%;
  right: 0;
  top: 100%;
  padding: 10px 0;
  transform: scaleX(0);
  transform-origin: right center;
  transition: all 0.3s ease;
  list-style-type: none;
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
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  padding: 10px 0;
  text-align: center;
  text-decoration: none;
}

@media (min-width: 1024px) {
  ul {
    width: 20%;
  }
}

@media (hover: hover) {
  ul li a:hover {
    color: var(--color-link-hover);
  }
}
</style>
