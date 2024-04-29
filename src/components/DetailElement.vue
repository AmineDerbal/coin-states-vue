<script>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    details: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      faGear
    }
  },
  setup() {
    const isOpen = ref(false)
    const selectedFontSize = ref(16)
    const fontSizes = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    const setFontSize = (event) => {
      selectedFontSize.value = Number(event.target.value)
    }
    const toggleModal = () => {
      isOpen.value = !isOpen.value
    }
    const startAnimation = (event) => {
      event.target.style.animation = 'rotateIn 4s'
    }

    const stopAnimation = (event) => {
      event.target.style.animation = ''
    }

    return {
      isOpen,
      toggleModal,
      selectedFontSize,
      fontSizes,
      startAnimation,
      stopAnimation,
      setFontSize
    }
  }
}
</script>

<template>
  <div class="details-container">
    <div class="options">
      <button @click="toggleModal" type="button">Options <FontAwesomeIcon :icon="faGear" /></button>
    </div>
    <transition name="modal-fade">
      <div v-if="isOpen" @click="toggleModal" class="modal">
        <div @click.stop class="modal-content">
          <span @click="toggleModal" class="close">&times;</span>
          <div class="modal-top">
            <h3>Options</h3>
          </div>
          <div class="font-size-container">
            <label for="font-size">
              Font size
              <select
                v-model="selectedFontSize"
                id="font-size"
                name="font-size"
                @change="setFontSize"
              >
                <option value="">--Please choose an option--</option>
                <option v-for="fontSize in fontSizes" :key="fontSize" :value="fontSize">
                  {{ fontSize }}
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </transition>

    <div class="details-card">
      <img
        @mouseover="startAnimation"
        @mouseout="stopAnimation"
        class="detail-icon"
        :src="details.icon"
        :alt="details.id"
      />
      <h2>{{ details.name }}</h2>
      <table :style="{ fontSize: selectedFontSize + 'px' }">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{{ details.name }}</td>
          </tr>
          <tr>
            <td>Rank</td>
            <td>{{ details.rank }}</td>
          </tr>
          <tr>
            <td>Symbol</td>
            <td>{{ details.symbol }}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              {{
                new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(
                  details.price
                )
              }}
            </td>
          </tr>
          <tr>
            <td>Conversion rate to BTC</td>
            <td>
              {{
                new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
                  details.priceBtc
                )
              }}
            </td>
          </tr>
          <tr>
            <td>Daily change for Price</td>
            <td>{{ details.priceChange1d }}</td>
          </tr>
          <tr>
            <td>Hourly change for Price</td>
            <td>{{ details.priceChange1h }}</td>
          </tr>
          <tr>
            <td>Weekly change for Price</td>
            <td>{{ details.priceChange1w }}</td>
          </tr>
          <tr>
            <td>Total Supply</td>
            <td>
              {{
                new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(
                  details.totalSupply
                )
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.details-card {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.detail-icon {
  width: 150px;
  height: 150px;
}

table {
  font-family: 'Oxygen', sans-serif;
}

table,
td,
tr {
  border: 1px solid #15e6cd;
}

table tr {
  background-color: #5899e2;
}

table tr:nth-of-type(even) {
  background-color: #335c81;
}

table td {
  padding: 0.5rem;
}

.options {
  display: flex;
  flex-direction: row-reverse;
  margin: 0 0.5rem;
  cursor: pointer;
}

.options button {
  border-radius: 10px;
  display: flex;
  padding: 0.2rem 0.4rem;
  gap: 2px;
  background: #587291;
  border: none;
  color: #fff;
}

.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  color: black;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 0 20px;
  border: 1px solid #888;
  width: 60%; /* Could be more or less, depending on screen size */
}

.close {
  position: relative;
  top: 0;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.font-size-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
}

label {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
