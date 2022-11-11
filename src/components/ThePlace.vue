<script setup lang="ts">
import ImageSection from './ImageSection.vue';
import CardList from './cards/CardList.vue';
import CardItem from './cards/CardItem.vue';
import CardImportant from './cards/CardImportant.vue';
import CardIcon from './cards/CardIcon.vue';
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
    :descriptions="[
      'Le mariage aura lieu au Château des Clos, situé dans le parc naturel de la Haute Vallée de Chevreuse dans le département des Yvelines.',
    ]"
  >
    <div class="text-content">
      <div>
        <h3>Adresse</h3>
        <p>
          <a
            href="https://www.google.com/maps/place/Ch%C3%A2teau+des+Clos/@48.6075024,2.0225358,17z/data=!3m1!4b1!4m5!3m4!1s0x47e42c7b39893f5d:0x644d6a2793e32dd0!8m2!3d48.6074989!4d2.0270205?hl=fr"
            >Chemin des Clos 78830 Bonnelles, France</a
          >
        </p>
      </div>
      <CardList>
        <CardItem name="Voiture">
          <p>
            Le Chateau des Clos est situé à 30 minutes de Paris, 5 minutes de la
            sortie A10 Dourdan. Un parking est présent sur le lieu.
          </p>
        </CardItem>
        <CardItem name="Transport en commun">
          <CardImportant>
            <CardIcon>
              <span>6,40</span>
              <FontAwesomeIcon icon="fa-solid fa-euro-sign" />
            </CardIcon>
            <CardIcon>
              <FontAwesomeIcon icon="fa-solid fa-clock" />
              <span>2 heures</span>
            </CardIcon>
          </CardImportant>
          <div>
            <p>
              Il est possible d'aller en RER B jusqu'à la gare d'Orsay Ville.
            </p>
            <p>
              Depuis cette gare, le bus 39-07 ramène à 5 minutes du lieu,
              descendre à l'arrêt Capucins direction Clairière (Bulion)
            </p>
          </div>
        </CardItem>
      </CardList>
    </div>
  </ImageSection>
</template>

<style scoped>
.text-content {
  color: var(--color-text);
  gap: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.travel {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.travel-mode {
  font-weight: bold;
}
</style>
