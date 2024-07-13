<script setup lang="ts">
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Suggestions from "@/components/Suggestions.vue";
import InputSection from "@/components/InputSection.vue";
</script>

<template>
  <Header />

  <hr class="mx-4" />

  <main>
    <Hero />
    <Suggestions />
    <InputSection />
  </main>
</template>
