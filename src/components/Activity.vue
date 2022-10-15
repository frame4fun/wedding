<script lang="ts" setup></script>

<script lang="ts">
export class Activity {
  name: string | undefined;
  time: string | undefined;
}


export default {
  props: {
    activity: Activity,
  },
};
</script>

<template>
  <div class="event">
    <p>{{ activity.name }}</p>
    <p>{{ activity.time }}</p>
  </div>
</template>

<style scoped>
.event {
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
</style>
