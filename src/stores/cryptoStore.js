import { defineStore } from 'pinia'

export const useCryptoStore = defineStore({
  id: 'crypto',
  state: () => ({
    cryptos: [],
    isLoading: false,
    isError: false,
    isFetched: false
  }),
  actions: {
    async getCryptosData() {
      this.isLoading = true
      this.isError = false
      try {
        const options = {
          method: 'GET',
          headers: {
            'X-API-KEY': `${import.meta.env.VITE_API_KEY}`
          }
        }
        const response = await fetch(import.meta.env.VITE_API_URL, options)
        const data = await response.json()
        this.cryptos = data.result
        this.isFetched = true
      } catch (err) {
        this.hasError = true
        console.error(err)
      } finally {
        this.isLoading = false
      }
    }
  }
})
