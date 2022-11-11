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
      <h3>Pour plus de questions</h3>
      <p>
        Vous pouvez contacter Stephanie (notre organisatrice de mariage) au
        <a :href="`tel: 0608836806`">06 08 83 68 06 </a> pour toutes questions
        relatives à l'organisation ou nous envoyer un mail à l'adresse
        <a href="mailto:ag-mariage@ilymail.fr">ag-mariage@ilymail.fr</a>
      </p>
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

@media (min-width: 1024px) {
  .text-content {
    margin: 1rem;
    max-width: 50%;
  }
}
</style>
