<template>
  <div>
    <h1>Portfolio</h1>
    <ul>
      <li v-for="item in portfolioItems" :key="item.id">
        <router-link :to="`/portfolio/${item.id}`">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { portfolioItems } from '../data/portfolio'

export default {
  data() {
    return {
      portfolioItems,
    }
  },
}
</script>
