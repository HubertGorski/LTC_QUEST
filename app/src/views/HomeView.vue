<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import PositionBtn from "@/components/buttons/PositionBtn.vue";
import {
  darkModeStates,
  darkModeIcons,
} from "@/components/buttons/model/DarkModeStates";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <main>
    <div class="btn">
      <PositionBtn
        :state="isDark"
        :nameStates="darkModeStates"
        :icons="darkModeIcons"
        @changeState="toggleDark"
        class="icon"
      />
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
