<template>
  <header>
    <div class="navigation-left">
      <FontAwesomeIcon class="chevron-left" :icon="faChevronLeft" :style="{ color: '#fff' }" />
      <span>2023</span>
    </div>
    <h1 :style="{ animation: 'jackInTheBox 2s' }">Coins States</h1>
    <div class="navigation-right">
      <FontAwesomeIcon :icon="faMicrophone" />
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      faChevronLeft,
      faMicrophone
    }
  },
  methods: {
    navigateToHome() {
      // Implement navigation logic here
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header > div {
  display: flex;
  align-items: center;
  padding: 0 2rem;
  gap: 0.5rem;
}
.chevron-left {
  cursor: pointer;
}
.navigation-left,
.navigation-right {
  font-size: 1.3rem;
}
.navigation-left,
.navigation-right {
  font-size: 1.3rem;
}

@media only screen and (max-width: 768px) {
  .navigation-left,
  .navigation-right {
    font-size: 0.9rem;
  }

  h1 {
    font-size: 1.2rem;
  }
}
</style>
