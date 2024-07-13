import { X } from 'lucide-vue-next';
<script setup lang="ts">
import { X } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col gap-4 mt-8 items-center justify-center p-2">
    <div class="flex items-center gap-1">
      <img src="@/assets/logo.svg" alt="Hero image" width="30" height="30" />
      <div class="text-2xl font-bold text-primary">Techstack</div>
    </div>

    <div class="flex flex-row items-start gap-4 p-2 bg-blue-200 rounded-md">
      <div>
        <p class="text-gray-700">
          The smartest and fastest AI yet? Invite friends to try Claude 3.5
          Sonnet for free!
        </p>
        <div class="flex gap-4">
          <button class="text-primary font-bold">Try now</button>
          <button class="text-gray-400">Dismiss</button>
        </div>
      </div>
      <button class="bg-white p-0.5 rounded-full">
        <X :size="16" color="gray" />
      </button>
    </div>
  </div>
</template>
