<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Project managment",
    description:
      "A highly experienced team who can mange projects with accountability.",
  },
  {
    icon: "badgeCheck",
    title: "ESTIMATING",
    description:
      "We use leading edge software to insure the most precise estimates.",
  },
  {
    icon: "goal",
    title: "LOGISTICS & STRATEGIC PLANNING",
    description:
      "Coordinated planning focused on time management and efficiency.",
  },
  {
    icon: "pictureInPicture",
    title: "LIBRARY OF PRODUCTS",
    description:
      "Our relationships with vendors has allowed for a vast product library.",
  },
  {
    icon: "mousePointerClick",
    title: "LEED CONSULTING",
    description:
      "We recommend the optimal products and services for long-term sustainability.",
  },
  {
    icon: "newspaper",
    title: "CERTIFIED INSTALLATION",
    description:
      "Dedicated teams of installers contribute to the success of delivering projects on time.",
  },
  {
    icon: "tabletSmartphone",
    title: "FLOOR LEVELING & SURVEYING",
    description:
      "With over 15 years of experience in both fields, Source One Flooring can take care of all pre-flooring preparations and tests.",
  },
  {
    icon: "badgeCheck",
    title: "MAINTENANCE",
    description:
      "We offer these services in an on-going basis and cover wide range of sectors, including hospitality, corporate, health care and education.",
  },
  {
    icon: "goal",
    title: "SPECIFICATION & DESIGN SUPPORT",
    description:
      "With over 50 years of combined experience ranging from all sectors of the industry, our sales team is ready for any project.",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider" data-aos="fade-up">
      Services
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4" data-aos="fade-up">
      What Makes Us Different
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8" data-aos="fade-up">
      Source One Floorings is an innovative provider of commercial flooring solution in the DC Metro area. Our vision is
      to redefine the flooring industry standards by delivering the highest level of contentment to our clients. Source
      One Flooring is committed to its founding principals of establishing relationships, delivering exceptional
      workmanship and Strategic planning. Our experienced team of professionals will provide intuitive expert advice,
      dependability and open assertive communication. The team meticulously pays the same level of attention to detail
      no matter how big and complex or small and simple the project.

      Source One Flooring is proud to be recognized as one of the new leaders in the Flooring industry.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="{ icon, title, description } in featureList" :key="title">
        <Card class="h-full bg-background border-0 shadow-none" data-aos="fade-up">
          <CardHeader class="flex justify-center items-center">
            <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
              <component :is="iconMap[icon]" class="size-6 text-primary" />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
