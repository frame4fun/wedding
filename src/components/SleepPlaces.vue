<script setup lang="ts">
import CardItem from './CardItem.vue';
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
  computed: {
    getSortedOtherPlaces() {
      const sortKey = this.sort;
      return otherPlaces.sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        if (aValue === undefined) {
          return 1;
        }
        if (bValue === undefined) {
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
  methods: {
    onSortOptionsChangeEvent(payload: Event) {
      const target = payload.target as HTMLSelectElement;
      const newValue = target.value as SortPossiblities;
      this.sort = newValue;
    },
  },
});
</script>

<template>
  <div id="sleep">
    <div>
      <h2>Les hébergements du château</h2>
    </div>
    <div class="other-places">
      <h2>Les hébergements autour du château</h2>
      <div class="place-select">
        <label for="place-options-select">Filtrer par :</label>
        <select
          id="place-options-select"
          v-model="sort"
          @change="onSortOptionsChangeEvent"
        >
          <option
            v-for="option in sortedOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <ul class="card-items">
        <CardItem
          v-for="otherPlace in getSortedOtherPlaces"
          :key="otherPlace.Nom"
          :name="otherPlace.Nom"
          :website="otherPlace['Site internet']"
          :address="otherPlace['Adresse']"
          :address-link="otherPlace['Plan']"
          :time="otherPlace['Temps en voiture du lieu (en minutes)']"
          :distance="otherPlace['Distance du lieu (en km)']"
          :price="otherPlace['Prix indicatif']"
          :phone-number="otherPlace['Numéro téléphone']"
          :description="otherPlace['Info complémentaires']"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.other-places {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.place-select > * {
  margin: 0 10px;
}

.card-items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  padding: 0;
}
</style>
