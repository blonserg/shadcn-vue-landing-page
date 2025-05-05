<template>
  <Navbar />
  <Hero />
  <Testimonials />
  <div v-if="item">
    <h1>{{ item.title }}</h1>
    <p>{{ item.description }}</p>
    <img :src="item.image" alt="" />
  </div>
  <div v-else>
    <p>Item not found</p>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Testimonials from "../components/Testimonials.vue";
import { portfolioItems } from '../data/portfolio';

export default {
  props: ['id'],
  components: {
    Navbar,
    Hero,
    Testimonials,
  },
  computed: {
    item() {
      return portfolioItems.find(item => item.id === this.id)
    },
  },
}
</script>
