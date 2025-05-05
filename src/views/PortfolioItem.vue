<template>
  <Navbar />
  <section v-if="item" class="container">
    <div class="flex items-center justify-center">
      <div class="mr-10">
        <h1>{{ item.title }}</h1>
        <p>{{ item.description }}</p>
      </div>
      <PortfolioCarousel />
    </div>
  </section>
  <section v-else>
    <p>Item not found</p>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PortfolioCarousel from "../components/PortfolioCarousel.vue";
import { portfolioItems } from '../data/portfolio';

export default {
  props: ['id'],
  components: {
    Navbar,
    PortfolioCarousel,
  },
  computed: {
    item() {
      return portfolioItems.find(item => item.id === this.id)
    },
  },
}
</script>
