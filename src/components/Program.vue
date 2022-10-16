<script lang="ts" setup>

</script>

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
          time: "L'horaire sera communiquée ultérieurement"
        },
        {
          name: "Réception",
          time: "L'horaire sera communiquée ultérieurement"
        },
        {
          name: "Brunch",
          time: "L'horaire sera communiquée ultérieurement"
        }
      ]
    };
  }
};
</script>

<template>
  <div id="program">
    <p class="title">Programme de la journée</p>
    <div class="content">
      <img id="assis-pyramide" alt="Assis devant la pyramide du Louvres" src="../assets/assis-devant-pyramide.JPG" />
      <div class="timeline">
        <Activity v-for="(activity, index) in activities" :key="index" :activity="activity" />
      </div>

    </div>

  </div>
</template>

<style scoped>
#program {
  height: 100%;
}

#assis-pyramide {
  height: 50rem;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: hsla(var(--pink), 1);
  font-family: Allura, serif;
  text-align: center;
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
