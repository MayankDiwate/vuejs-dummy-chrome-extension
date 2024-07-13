<script setup lang="ts">
import { X } from "lucide-vue-next";

const questions = [
  "Tell me somthing about the Big Bang so that I can explain to my 5-year old child",
  "Please provide me with IO gift ideas for my friends birthday",
  "Generate five catchy titles for my writing about the use case of Chatgpt",
];
</script>

<template>
  <div class="flex flex-col gap-4 py-6 px-2 items-center">
    <div class="text-lg font-bold">How can I assist you today?</div>

    <div v-for="question in questions" class="bg-gray-200 p-2 rounded-md">
      <p class="text-gray-700">{{ question }}</p>
    </div>

    <div class="flex items-start bg-blue-200 rounded-md p-2">
      <p class="text-gray-700">
        Sider starts a new chat each time you reopen the sidebar. If you want to
        resume the last chat,
        <button class="text-primary font-semibold">
          change this in the setting.
        </button>
      </p>

      <button class="bg-white p-0.5 rounded-full">
        <X :size="16" color="gray" />
      </button>
    </div>
  </div>
</template>
