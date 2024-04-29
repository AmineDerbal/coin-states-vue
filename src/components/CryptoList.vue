<script>
import { computed, ref, onMounted } from 'vue'
import { useCryptoStore } from '@/stores/cryptoStore'
import CryptoElement from './CryptoElement.vue'
import LoaderVue from './LoaderVue.vue'

export default {
  components: {
    CryptoElement,
    LoaderVue
  },

  setup() {
    const store = useCryptoStore()
    const search = ref('')
    const cryptos = computed(() => store.cryptos)
    const isLoading = computed(() => store.isLoading)
    const isError = computed(() => store.isError)
    const filteredCryptos = computed(() =>
      cryptos.value.filter(
        (crypto) => !search.value || crypto.name.toLowerCase().includes(search.value.toLowerCase())
      )
    )

    const getData = () => {
      store.getCryptosData()
    }

    onMounted(() => {
      if (!store.isFetched.value) {
        getData()
      }
    })

    return {
      cryptos,
      search,
      filteredCryptos,
      isLoading,
      isError,
      getData
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-if="cryptos.length" class="searchBar">
      <input type="text" class="search-input" v-model="search" placeholder="Search Crypto Coins" />
    </div>
    <div class="cryptos-container">
      <CryptoElement
        v-for="(crypto, index) in filteredCryptos"
        :key="crypto.id"
        :crypto="crypto"
        :index="index"
      />
    </div>
    <h2 v-if="!cryptos.length" class="empty-cryptos">No Crypto was fetched</h2>
    <LoaderVue v-if="isLoading" />
    <h2 v-if="isError" class="empty-cryptos">An error has occurred</h2>
  </div>
</template>

<style scoped>
.cryptos-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
}

.empty-cryptos {
  text-align: center;
  font-size: 2rem;
}

.searchBar {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.searchBar input {
  text-align: center;
  font-size: 1.5rem;
  height: 2rem;
  width: 50%;
  border-radius: 10px;
}

@media only screen and (max-width: 768px) {
  .searchBar input {
    font-size: 1rem;
  }
}
</style>
