<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    tooltipText: { type: String, required: false, default: '' },
  },
  data() {
    return {
      classes: {
        'card-icon': true,
        tooltip: this.tooltipText !== '',
      },
    };
  },
});
</script>

<template>
  <div :class="classes" :data-text="tooltipText">
    <slot />
  </div>
</template>

<style>
.card-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card-icon > *:not(:first-child) {
  margin-left: 5px;
}

.tooltip:before {
  content: attr(data-text); /* here's the magic */
  position: absolute;
  z-index: 1;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* move to right */
  left: 100%;
  margin-left: 15px; /* and add a small left margin */

  /* basic styles */
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  text-align: center;

  display: none; /* hide by default */
}

.tooltip:hover:before,
.tooltip:hover:after {
  display: block;
}

.tooltip:after {
  content: '';
  position: absolute;

  /* position tooltip correctly */
  left: 100%;
  margin-left: -5px;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* the arrow */
  border: 10px solid #000;
  border-color: transparent black transparent transparent;

  display: none;
}
</style>
