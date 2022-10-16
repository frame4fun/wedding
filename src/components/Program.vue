<script lang="ts" setup>
import ImageSection from './ImageSection.vue';
import imagePyramide from '../assets/assis-devant-pyramide.jpeg';
</script>

<script lang="ts">
import Activity from './Activity.vue';

export default {
  components: {
    Activity,
  },
  data() {
    return {
      activities: [
        {
          name: 'Cérémonie laïque',
          time: "L'horaire sera communiquée ultérieurement",
        },
        {
          name: 'Réception',
          time: "L'horaire sera communiquée ultérieurement",
        },
        {
          name: 'Brunch',
          time: "L'horaire sera communiquée ultérieurement",
        },
      ],
    };
  },
};
</script>

<template>
  <ImageSection
    id="program"
    title="Programme de la journée"
    image-alt="Assis devant la pyramide du Louvres"
    :image-src="imagePyramide"
  >
    <div class="timeline">
      <Activity
        v-for="(activity, index) in activities"
        :key="index"
        :activity="activity"
      />
    </div>
  </ImageSection>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 1rem;
  flex-wrap: wrap;
}
</style>
