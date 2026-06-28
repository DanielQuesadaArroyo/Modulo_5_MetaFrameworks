<template>
  <div class="container mx-auto px-6 py-12 sm:px-8">
    <div class="grid grid-cols-1 gap-8 text-white md:grid-cols-2">
      <div>
        <h1 class="text-3xl font-bold tracking-tight mb-4">{{ house.name }}</h1>

        <img
          :src="'http://localhost:3001' + house.image"
          :alt="house.name"
          class="w-full rounded-2xl shadow-lg object-cover aspect-video"
        />
      </div>
      <div>
        <div class="flex flex-col items-end">
          <h1 class="text-3xl font-bold tracking-tight mb-4">
            {{ house.price }} €/noche
          </h1>
        </div>
        <div>
          <p class="text-white-900 font-bold text-lg leading-relaxed mb-6">
            Descripción:
          </p>
          <p class="text-gray-400 text-lg leading-relaxed mb-6">
            {{ house.description }}
          </p>
          <p class="text-white-900 font-bold text-lg leading-relaxed mb-6">
            Dirección:
          </p>
          <p class="text-gray-400 text-lg leading-relaxed mb-6">
            {{ house.address }}
          </p>
          <p class="text-white-900 font-bold text-lg leading-relaxed mb-6">
            Habitaciones:
          </p>
          <p class="text-gray-400 text-lg leading-relaxed mb-6">
            {{ house.bedrooms }}
          </p>
          <p class="text-white-900 font-bold text-lg leading-relaxed mb-6">
            Camas:
          </p>
          <p class="text-gray-400 text-lg leading-relaxed mb-6">
            {{ house.beds }}
          </p>
          <p class="text-white-900 font-bold text-lg leading-relaxed mb-6">
            Baños:
          </p>
          <p class="text-gray-400 text-lg leading-relaxed mb-6">
            {{ house.bathrooms }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <p class="ml-8 text-white-900 font-bold text-lg leading-relaxed mb-6">
      Reviews:
    </p>
    <div>
      <div
        v-for="review in house.reviews"
        :key="review.id"
        class="p-4 ml-8 mr-8 border-2 border-white-500 mb-6"
      >
        <p>{{ review.date }}</p>
        <p>{{ review.author }}: {{ review.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const houseId = route.params.id;

const { data: house, pending } = await useFetch<any>(
  `http://localhost:3001/api/houses/${houseId}`,
);

definePageMeta({
  layout: "default",
});
</script>
