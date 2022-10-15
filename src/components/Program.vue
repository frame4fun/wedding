<script setup lang="ts"></script>

<script lang="ts"></script>

<template>
  <div id="program">
    <p class="title">Programme de la journée</p>
    <div class="timeline">
      <div>Cérémonie laïque</div>
      <div>Réception</div>
      <div>Brunch</div>
    </div>
  </div>
</template>

<style scoped>
#program {
  height: 100%;
}
.title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: hsla(var(--pink), 1);
  font-family: Allura,serif;
  text-align: center;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 1rem;
}

.text-content {
  color: var(--color-text);
  text-align: center;
  gap: 4rem;
  display: flex;
  flex-direction: column;
}
</style>
