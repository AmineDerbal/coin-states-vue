<script>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDetailStore } from '@/stores/detailStore'
import LoaderVue from './LoaderVue.vue'
import DetailElement from './DetailElement.vue'

export default {
  components: {
    DetailElement,
    LoaderVue
  },
  setup() {
    const store = useDetailStore()
    const route = useRoute()
    const details = computed(() => store.details)
    const isLoading = computed(() => store.isLoading)
    const isError = computed(() => store.isError)

    const getDetails = () => {
      store.getDetailsData(route.params.id)
    }

    onMounted(() => {
      getDetails()
    })

    return {
      details,
      isLoading,
      isError
    }
  }
}
</script>

<template>
  <LoaderVue v-if="isLoading" />
  <h2 v-if="isError" class="empty-cryptos">An error has occurred</h2>
  <div class="details-container">
    <DetailElement :details="details" />
  </div>
</template>
