<template>
  <TheNav />
  <div>
    <img src="@/assets/logo.png" alt="why are you running" />
    <h1>Welcome to the home view</h1>
    <router-link to="/about">about</router-link>
    <n-button>naive-ui</n-button>
    <n-date-picker v-model:value="timestamp" type="date" clearable />
    <pre>{{ JSON.stringify(timestamp) }}</pre>
    <n-color-picker />
    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

let timestamp = ref(1183135260000);
</script>
<style lang="scss" scoped></style>
