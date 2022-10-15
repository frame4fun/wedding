<script setup lang="ts"></script>

<script lang="ts"></script>

<template>
  <div id="place">
    <p class="title">Le lieu</p>
    <div class="content">
      <div class="text-content">
        <p class="subtitle">
          Le mariage aura lieu au Château des Clos, situé dans le parc naturel
          de la Haute Vallée de Chevreuse dans le département des Yvelines.
        </p>
        <div class="travel">
          <p class="subtitle">Transport :</p>
          <div>
            <p class="travel-mode">Voitures :</p>
            <p>
              Le Chateau des Clos est situé à 30 minutes de Paris, 5 minutes de la sortie A10 Dourdan.
            </p>
            <p>Un parking est présent sur le lieu.</p>
          </div>
          <div>
            <p class="travel-mode">
              Transport en commun :</p>
            <p>Il est possible d'aller en RER B jusqu'à la
              gare d'Orsay Ville.
            </p>
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
      <img src="../assets/lieu.jpg" alt="the place" />
    </div>
  </div>
</template>

<style scoped>
#place {
  height: 100%;
}
.title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: hsla(var(--pink), 1);
  font-family: Allura, serif;
  text-align: center;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 1rem;
}

.text-content {
  color: var(--color-text);
  text-align: center;
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
</style>
