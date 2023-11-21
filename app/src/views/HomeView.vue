<script setup lang="ts">
import DarkModeBtn from "@/components/buttons/DarkModeBtn.vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <main>
    <div class="btn">
      <DarkModeBtn class="icon" @click="toggleDark()" />
      <p v-if="isDark">Ciemny</p>
      <p v-else>Jasny</p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .icon {
    height: 4.8rem;
    width: 4.8rem;
  }
}
</style>
