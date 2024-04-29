<script setup>
import { RouterView } from 'vue-router'
import HeaderVue from './components/HeaderVue.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderVue />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>
