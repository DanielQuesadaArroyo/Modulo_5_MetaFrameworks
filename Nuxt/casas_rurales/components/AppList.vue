<template>
  <section class="container mx-auto px-6 py-8 sm:px-8">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AppCard
        v-for="house in houses"
        :key="house.id"
        :id="house.id"
        :name="house.name"
        :image="'http://localhost:3001' + house.image"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: houses } = await useFetch<any[]>(
  "http://localhost:3001/api/houses",
);
</script>
