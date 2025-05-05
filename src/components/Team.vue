<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { portfolioItems } from '../data/portfolio';

</script>

<template>
  <section id="team" class="container lg:w-[75%] py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider" data-aos="fade-up">Portfolio</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold" data-aos="fade-up">
        Our projects
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      <Card v-for="{
        id,
        title,
        description,
        image,
      } in portfolioItems" :key="id"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg" data-aos="zoom-in"
        data-aos-delay="500">
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img :src="image" alt=""
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]" />
          </div>
          <CardTitle class="py-6 pb-4 px-6">{{ title }}
            <router-link :to="`/portfolio/${id}`">
              <span class="text-primary">{{ title }}</span>
            </router-link>
          </CardTitle>
        </CardHeader>

        <!-- <CardContent v-for="(position, index) in positions" :key="index" :class="{
          'pb-0 text-muted-foreground ': true,
          'pb-4': index === positions.length - 1,
        }">
          {{ position }}<span v-if="index < positions.length - 1">,</span>
        </CardContent> -->

        <!-- <CardFooter class="space-x-4 mt-auto">
          <a v-for="{ name, url } in socialNetworks" key="name" :href="url" target="_blank"
            class="hover:opacity-80 transition-all" :aria-label="`Visit our ${name} page`">
            <component :is="socialIcon(name)" />
          </a>
        </CardFooter> -->
      </Card>
    </div>
  </section>
</template>
