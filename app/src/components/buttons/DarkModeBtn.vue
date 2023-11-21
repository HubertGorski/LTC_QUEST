<script setup lang="ts">
import { ref } from "vue";
import MoonIcon from "../../assets/icons/MoonIcon.vue";
import SunIcon from "../../assets/icons/SunIcon.vue";

const isDark = ref<boolean>(true);
</script>

<template>
  <div class="dark-mode-btn" @click="isDark = !isDark">
    <MoonIcon v-if="isDark" />
    <SunIcon v-else />
  </div>
</template>

<style lang="scss" scoped></style>
