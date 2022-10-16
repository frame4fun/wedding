<script lang="ts" setup>
import CustomSection from './CustomSection.vue';
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
  <CustomSection id="program" title="Programme de la journée">
    <div class="content">
      <img
        id="assis-pyramide"
        alt="Assis devant la pyramide du Louvres"
        src="../assets/assis-devant-pyramide.JPG"
      />
      <div class="timeline">
        <Activity
          v-for="(activity, index) in activities"
          :key="index"
          :activity="activity"
        />
      </div>
    </div>
  </CustomSection>
</template>

<style scoped>
#assis-pyramide {
  height: 50rem;
}

.content {
  display: flex;
  flex-direction: row;
}

.timeline {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 1rem;
}
</style>
