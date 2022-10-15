<script setup lang="ts">
import { otherPlaces, type OtherPlace } from './sleepPlaces';
</script>

<script lang="ts">
import { defineComponent } from 'vue';
type SortPossiblities = Extract<
  keyof OtherPlace,
  'Prix indicatif' | 'Distance du lieu (en km)'
>;

export default defineComponent({
  data(): {
    sort: SortPossiblities;
    sortedOptions: Array<{ text: string; value: SortPossiblities }>;
  } {
    return {
      sort: 'Prix indicatif',
      sortedOptions: [
        { text: 'Prix', value: 'Prix indicatif' },
        { text: 'Distance', value: 'Distance du lieu (en km)' },
      ],
    };
  },
  methods: {
    onSortOptionsChangeEvent(payload: Event) {
      const target = payload.target as HTMLSelectElement;
      const newValue = target.value as SortPossiblities;
      this.sort = newValue;
    },
  },
  computed: {
    getSortedOtherPlaces() {
      const sortKey = this.sort;
      return otherPlaces.sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        if (aValue === null) {
          return 1;
        }
        if (bValue === null) {
          return -1;
        }
        if (aValue > bValue) {
          return 1;
        }
        if (aValue < bValue) {
          return -1;
        }
        return 0;
      });
    },
  },
});
</script>

<template>
  <div id="sleep">
    <div>
      <h2>Les hébergements du château</h2>
    </div>
    <div>
      <h2>Les hébergements autour du château</h2>
      <select v-model="sort" @change="onSortOptionsChangeEvent">
        <option
          v-for="option in sortedOptions"
          :value="option.value"
          :key="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <ul>
        <li v-for="otherPlace in getSortedOtherPlaces" :key="otherPlace.Nom">
          {{ otherPlace.Nom }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
