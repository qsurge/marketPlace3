<script lang="ts" setup>
const { awesome } = useAppConfig();
definePageMeta({ layout: "page" });
useHead({
  titleTemplate: "",
  title: awesome?.name || "Nuxt 3 Awesome Starter",
});
import { event } from "vue-gtag";
import { onMounted } from 'vue'
import { useAppConfig } from "nuxt/app";

onMounted(() => {
  event('login', { method: 'Google' })
})
</script>

<template>
  <AwesomeWelcome :with-alert="true" />
</template>
