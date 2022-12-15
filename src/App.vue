<script setup>
  import Header from './partials/Header.vue'
  import Footer from './partials/Footer.vue'
  import Home from './pages/Home.vue'
</script>

<template>
  <Header />
  <Suspense>
    <template #default>
      <Home />
    </template>
    
    <template #fallback>
      <div class="loading">Loading...</div>
    </template>
  </Suspense>
  <Footer year="2022" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
