<script setup lang="ts">
import CountDown from './CountDown.vue';
</script>

<script lang="ts">
export default {
  data() {
    return {
      date: new Date(2023, 5, 24),
    };
  },
  computed: {
    formattedDate() {
      return this.date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
};
</script>

<template>
  <div class="background-image">
    <div class="transparent-overlay">
      <div class="text-content">
        <span class="info">On se marie !</span>
        <h1 class="names">Alice & Guillaume</h1>
        <span class="divider" />
        <h2 class="date">{{ formattedDate }}</h2>
        <CountDown :date="date" />
        <div class="form">
          <form
            action="https://forms.gle/jgQDxBAcBmU9XmrT8"
            method="get"
            target="_blank"
          >
            <button class="button-rsvp" type="submit">
              <span>Confirmez nous votre présence !</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
.background-image {
  background-image: url('../assets/Guillaume-Alice-mobile.jpeg');
  background-size: cover;
  background-position: center bottom;
  height: 100%;
}
.transparent-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  color: var(--color-text);
  text-align: center;
}
.names {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: hsla(var(--pink), 1);
  font-family: Allura;
}

.date {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: hsla(var(--orange), 1);
  font-family: Allura;
}

.divider {
  width: 100%;
  border-top: 3px solid hsla(var(--violet), 1);
  margin-bottom: 1.5rem;
}

.info {
  font-size: 1.3rem;
  color: hsla(var(--white));
}

.form {
  margin-top: 3rem;
}

.button-rsvp {
  background-color: hsla(var(--violet), 1);
  border-radius: 10px;
  border: 4px double hsla(var(--white), 0.9);
  color: hsla(var(--white), 0.9);
  text-align: center;
  font-size: 1rem;
  padding: 20px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button-rsvp span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.button-rsvp span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.button-rsvp:hover {
  background-color: hsla(var(--orange), 1);
}
.button-rsvp:hover span {
  padding-right: 25px;
}
.button-rsvp:hover span:after {
  opacity: 1;
  right: 0;
}

@media (min-width: 481px) and (max-width: 768px) {
  .background-image {
    background-image: url('../assets/Guillaume-Alice-tablet.jpeg');
  }

  .names {
    font-size: 3rem;
  }

  .date {
    font-size: 2rem;
  }

  .info {
    font-size: 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .background-image {
    background-image: url('../assets/Guillaume-Alice-desktop.jpeg');
  }

  .names {
    font-size: 4rem;
  }

  .date {
    font-size: 2.5rem;
  }

  .info {
    font-size: 1.8rem;
  }
}

@media (min-width: 1201px) {
  .background-image {
    background-image: url('../assets/Guillaume-Alice-desktop-large.jpeg');
  }

  .names {
    font-size: 5rem;
  }

  .date {
    font-size: 3rem;
  }

  .info {
    font-size: 2rem;
  }

  .button-rsvp {
    font-size: 1.7rem;
  }
}
</style>
