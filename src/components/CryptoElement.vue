<template>
  <div
    class="crypto-card"
    :style="{ animation: index % 2 === 0 ? 'backInLeft 2s' : 'backInRight 2s' }"
    @click="navigateToDetails"
    aria-hidden="true"
  >
    <h2>{{ crypto.name }}</h2>
    <img
      @mouseover="rotateIn"
      @mouseout="stopRoateIn"
      class="crypto-icon"
      :src="crypto.icon"
      :alt="crypto.name"
    />
  </div>
</template>

<script>
export default {
  props: {
    crypto: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  methods: {
    navigateToDetails() {
      this.$router.push(`/details/${this.crypto.id}`)
    },
    rotateIn(event) {
      event.target.style.animation = 'rotateIn 4s'
    },
    stopRoateIn(event) {
      event.target.style.animation = ''
    }
  }
}
</script>

<style scoped>
.crypto-icon {
  width: 100px;
  height: 100px;
}

.crypto-card {
  text-align: center;
  background-color: #5899e2;
  padding: 3rem 0;
  cursor: pointer;
}

.crypto-card:nth-child(4n-2),
.crypto-card:nth-child(4n-1) {
  background-color: #335c81;
}
</style>
