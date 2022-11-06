<script setup lang="ts">
import ImageSection from './ImageSection.vue';
import imageLieu from '../assets/lieu.jpg';
</script>

<script lang="ts"></script>

<template>
  <ImageSection
    id="place"
    title="Le lieu"
    image-alt="Le lieu"
    :image-src="imageLieu"
    :image-is-left="false"
  >
    <div class="text-content">
      <p class="subtitle">
        Le mariage aura lieu au Château des Clos, situé dans le parc naturel de
        la Haute Vallée de Chevreuse dans le département des Yvelines.
      </p>
      <div class="travel">
        <p class="subtitle">Transport :</p>
        <div>
          <p class="travel-mode">Voitures :</p>
          <p>
            Le Chateau des Clos est situé à 30 minutes de Paris, 5 minutes de la
            sortie A10 Dourdan. Un parking est présent sur le lieu.
          </p>
        </div>
        <div>
          <p class="travel-mode">Transport en commun :</p>
          <p>Il est possible d'aller en RER B jusqu'à la gare d'Orsay Ville.</p>
          <p>
            Depuis cette gare, le bus 39-07 ramène à 5 minutes du lieu,
            descendre à l'arrêt Capucins direction Clairière (Bulion)
          </p>
          <p>Durée totale du trajet estimée à 1h30</p>
        </div>
      </div>
      <div>
        <p class="subtitle">Adresse :</p>
        <p>Chemin des Clos 78830 Bonnelles, France</p>
      </div>
    </div>
  </ImageSection>
</template>

<style scoped>
.text-content {
  color: var(--color-text);
  text-align: justify;
  gap: 3rem;
  display: flex;
  flex-direction: column;
}

.travel {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.travel-mode {
  font-weight: bold;
}

.subtitle {
  font-weight: bold;
  color: hsla(var(--orange), 1);
}

@media (min-width: 1024px) {
  .text-content {
    margin: 1rem;
  }
}
</style>
