<template>
  <div
    class="max-w-sm rounded-xl overflow-hidden border border-dark-border bg-dark-card shadow-md transition-transform duration-300 hover:scale-[1.02]"
  >
    <NuxtLink
      :to="`/houses/${id}`"
      class="block max-w-sm rounded-xl overflow-hidden border border-dark-border bg-dark-card shadow-md transition-transform duration-300 hover:scale-[1.02]"
    >
      <div class="aspect-video w-full overflow-hidden bg-gray-800">
        <img
          class="h-full w-full object-cover"
          :src="image"
          :alt="name"
          loading="lazy"
        />
      </div>

      <div class="px-5 py-4">
        <h3 class="font-bold text-xl text-white tracking-tight line-clamp-1">
          {{ name }}
        </h3>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>
