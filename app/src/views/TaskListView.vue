<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const transitionName = ref("slide-right");
const activeTeamId = ref<number>(0);
watch(activeTeamId, (val, old) => {
  transitionName.value = val > old ? "slide-left" : "slide-right";
});
</script>

<template>
  <div class="task-list-view">tak</div>
</template>

<style lang="scss" scoped>
.slide-right-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}
.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(80px);
}
.slide-right-leave-from,
.slide-right-enter-to,
.slide-left-leave-from,
.slide-left-enter-to {
  opacity: 1;
}
.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-left-enter-active {
  transition: all 0.4s ease-in-out;
}
</style>
