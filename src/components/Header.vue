<script setup lang="ts">
import { X } from "lucide-vue-next";
</script>

<template>
  <header class="w-md flex flex-row p-4 gap-2 items-center justify-center">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="30"
      height="30"
    />
    <div class="text-lg font-bold">Help Ai Chat Bot</div>
    <X :size="30" />
  </header>
</template>
