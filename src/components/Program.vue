<script lang="ts" setup>
import ImageSection from "./ImageSection.vue";
import imagePyramide from "../assets/assis-devant-pyramide.jpeg";</script>

<script lang="ts">
import Activity from "./Activity.vue";

export default {
  components: {
    Activity
  },
  data() {
    return {
      activities: [
        {
          name: "Cérémonie laïque",
          time: "17h00"
        },
        {
          name: "Réception",
          time: "18h30"
        },
        {
          name: "Brunch",
          time: "Le lendemain midi"
        }
      ]
    };
  }
};
</script>

<template>
  <ImageSection
    id="program"
    :image-src="imagePyramide"
    image-alt="Assis devant la pyramide du Louvres"
    title="Programme de la journée"
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
  gap: 6rem;
  padding: 6rem;
}
</style>
