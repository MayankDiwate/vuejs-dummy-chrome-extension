<script setup lang="ts">
import {
  Zap,
  Scissors,
  Pin,
  Clock,
  MessageSquarePlus,
  WandSparkles,
  AtSign,
  SendHorizontal,
  Plus,
} from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col mt-10 mb-2 px-2 gap-2">
    <div class="flex justify-between">
      <div class="flex gap-3">
        <button>
          <Zap color="red" />
        </button>
        <button>
          <Scissors color="gray" />
        </button>
        <button>
          <Pin color="gray" />
        </button>
      </div>
      <div class="flex gap-3">
        <button>
          <Clock color="gray" />
        </button>
        <button>
          <MessageSquarePlus color="green" />
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-4 rounded-md bg-gray-100">
      <input
        type="text"
        placeholder="Type a message..."
        class="p-2 bg-gray-100 rounded-md outline-none"
      />
      <div class="flex items-center justify-between p-2">
        <div class="flex items-center gap-4">
          <button>
            <WandSparkles :size="20" color="blue" />
          </button>
          <button>
            <AtSign :size="20" color="blue" />
          </button>
          <button
            class="flex items-center gap-1 bg-blue-100 text-gray-500 rounded-full px-2 py-1"
          >
            <Plus :size="20" color="blue" /> <span>Add Tools</span>
          </button>
        </div>
        <button>
          <SendHorizontal :size="20" color="blue" />
        </button>
      </div>
    </div>
  </div>
</template>
