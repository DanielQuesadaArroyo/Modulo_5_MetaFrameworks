<template>
  <header
    class="border-b border-neutral-800 bg-black/90 backdrop-blur-md sticky top-0 z-50"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 sm:px-8">
      <div class="flex items-center justify-left gap-16">
        <div class="flex items-center gap-2">
          <h1 class="text-xl font-bold tracking-tight text-white">
            Casas Rurales 
          </h1>
        </div>
        <AppMenu />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import AppMenu from "./AppMenu.vue";

export default {
  components: {
    AppMenu,
  },
};
</script>
