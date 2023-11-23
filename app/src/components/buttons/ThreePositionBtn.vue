<script setup lang="ts">
import { ref } from "vue";

const state = ref<number>(0);
const changeState = () => {
  state.value = state.value === 2 ? 0 : state.value + 1;
};
</script>

<template>
  <div class="icon" :class="{ active: state > 0 }" @click="changeState()">
    <slot name="firstPosition" v-if="state < 2"></slot>
    <slot name="lastPosition" v-else></slot>
  </div>
</template>

<style lang="scss" scoped>
.active {
  color: red;
}
.icon {
  width: 3.2rem;
  height: 3.2rem;
}
</style>
