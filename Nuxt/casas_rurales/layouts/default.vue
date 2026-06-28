<template>
  <div>
    <AppHeader />

    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script lang="ts">
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

/*export default {
  components: {
    AppHeader,
    AppList,
    AppFooter,
  },
};*/

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
