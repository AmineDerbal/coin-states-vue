import { defineStore } from 'pinia'

export const useDetailStore = defineStore({
  id: 'detail',
  state: () => ({
    details: [],
    isLoading: false,
    isError: false
  }),
  actions: {
    async getDetailsData(id) {
      console.log(id)
      ;(this.isLoading = true), (this.isError = false)
      try {
        const options = {
          method: 'GET',
          headers: {
            'X-API-KEY': `${import.meta.env.VITE_API_KEY}`
          }
        }
        console.log(import.meta.env.VITE_API_KEY)
        console.log(import.meta.env.VITE_API_URL)
        const response = await fetch(`${import.meta.env.VITE_API_URL}${id}`, options)
        const data = await response.json()
        this.details = data
        console.log(data)
      } catch (err) {
        this.isError = true
        console.error(err)
      } finally {
        this.isLoading = false
      }
    }
  }
})
