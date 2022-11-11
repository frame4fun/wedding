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
          time: '16h45',
        },
        {
          name: 'Réception',
          time: '18h00',
        },
        {
          name: 'Brunch',
          time: 'Le lendemain midi',
        },
      ],
    };
  },
};
</script>

<template>
  <ImageSection
    id="program"
    :image-src="imagePyramide"
    image-alt="Assis devant la pyramide du Louvres"
    title="Programme des festivités"
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
  flex-wrap: wrap;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .timeline {
    gap: 6rem;
  }
}
</style>
