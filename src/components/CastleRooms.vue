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
  <BaseSection
    id="castle-rooms"
    title="Les hébergements du château"
    :descriptions="[
      `Tous les hébergements du château possèdent une salle de bain privative et
        sont équipées de serviettes, tapis de bain, produits d'accueil (gel
        douche, savon, bonnet de douche), sèche-cheveux. Les hébergements du château ne sont disponibles que pour la nuit du samedi.`,
      `Contacter l'un de nous pour réserver une de ces chambres.`,
    ]"
  >
    <div
      v-for="castleCategory in castleCategories"
      :key="castleCategory.title"
      class="category"
    >
      <h3>{{ castleCategory.title }}</h3>
      <div class="description-container">
        <p class="description">{{ castleCategory.description }}</p>
      </div>
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
.category {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
}
</style>
