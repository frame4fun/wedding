<script lang="ts" setup></script>

<script lang="ts">
export class Activity {
  name: string | undefined;
  time: string | undefined;
}


export default {
  props: {
    activity: Activity
  }
};
</script>

<template>
  <div class="event">
    <h3>{{ activity.name }}</h3>
    <h4>{{ activity.time }}</h4>
  </div>
</template>

<style scoped>
.event {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  border: 20px solid;
  border-image: url('../assets/showcard-border.svg') 20 20 repeat;
}
</style>
