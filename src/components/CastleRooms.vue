<script setup lang="ts">
import BaseSection from './BaseSection.vue';
import CardList from './cards/CardList.vue';
import CastleRoom from './CastleRoom.vue';
import { castleCategories } from './castleRooms';
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
  <BaseSection id="castle-rooms" title="Les hébergements du château">
    <p class="description">
      Toutes les chambres possèdent une salle de bain privative et sont équipées
      de serviettes, tapis de bain, produits d'accueil (gel douche, savon,
      bonnet de douche), sèche-cheveux. Jusqu'à 60 personnes peuvent être
      hébergés sur place.
    </p>
    <div
      v-for="castleCategory in castleCategories"
      :key="castleCategory.title"
      class="category"
    >
      <h3>{{ castleCategory.title }}</h3>
      <p class="description">{{ castleCategory.description }}</p>
      <CardList>
        <CastleRoom
          v-for="castleRoom in castleCategory.rooms"
          :key="castleRoom.Nom"
          :name="castleRoom.Nom"
          :price="castleRoom.Prix"
          :description="castleRoom.Info"
          :image="castleRoom.Image"
        />
      </CardList>
    </div>
  </BaseSection>
</template>

<style scoped>
.description {
  text-align: center;
  margin: 1rem 2rem;
}

.category {
  margin-top: 2rem;
}
</style>
