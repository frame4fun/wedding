<script setup lang="ts"></script>

<script lang="ts"></script>

<template>
  <div id="place">
    <p class="title">Le lieu</p>
    <div class="content">
      <div class="text-content">
      <p>
        Le mariage aura lieu au Château des Clos, situé dans le parc naturel de la Haute Vallée de Chevreuse dans le département des Yvelines.
        Il est situé à 30 minutes de Paris, 5 minutes de la sortie A10 Dourdan.
      </p>
      <p>
        Adresse : Chemin des Clos 78830 Bonnelles, France
      </p>
    </div>
      <img src="../assets/lieu.jpg" alt="the place">

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
  font-family: Allura,serif;
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
  gap: 4rem;
  display: flex;
  flex-direction: column;
}
</style>
