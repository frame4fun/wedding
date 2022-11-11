<script setup lang="ts">
import ImageSection from './ImageSection.vue';
import imageContact from '../assets/assis-balcon.jpeg';
</script>

<script lang="ts"></script>

<template>
  <ImageSection
    id="contact"
    title="Contact"
    image-alt="Contact"
    :image-src="imageContact"
    :image-is-left="false"
  >
    <div class="text-content">
        <p class="subtitle">Pour plus de question :</p>
        <p>vous pouvez contacter Stephanie si vous avez des questions sur l'organisation :  <a :href="`tel: 0608836806`">06 08 83 68 06 </a> </p>
        <p>ou nous envoyer un mail :  <a href="mailto:ag-mariage@ilymail.fr">Ecrivez nous</a></p>
    </div>
  </ImageSection>
</template>

<style scoped>
.text-content {
  color: var(--color-text);
  text-align: justify;
  gap: 3rem;
  display: flex;
  flex-direction: column;
}

.subtitle {
  font-weight: bold;
  color: hsla(var(--orange), 1);
}

@media (min-width: 1024px) {
  .text-content {
    margin: 1rem;
  }
}
</style>
