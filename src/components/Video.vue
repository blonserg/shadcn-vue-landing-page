<script setup lang="ts">
import Hero from "./Hero.vue";
</script>


<template>
  <div class="video-container">
    <video autoplay muted loop playsinline>
      <source src="@/assets/video/hero.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
    <div class="overlay-content">
      <Hero />
    </div>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  top: -57px;
}

.video-container video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
  filter: brightness(0.5);
}

.overlay-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 2rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>
