<script setup lang="ts">
import BaseSection from './BaseSection.vue';
import CardList from './cards/CardList.vue';
import OtherPlaceComp from './OtherPlace.vue';
import { otherPlaces, type OtherPlace } from './otherPlaces';
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
  <BaseSection id="other-places" title="Les hébergements autour du château">
    <div class="place-select">
      <label for="place-options-select">Trier par :</label>
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
    <CardList>
      <OtherPlaceComp
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
    </CardList>
  </BaseSection>
</template>

<style scoped>
.place-select > * {
  margin: 0 10px;
}
</style>
