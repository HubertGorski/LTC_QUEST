<script setup lang="ts">
import { ref } from "vue";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon.vue";
import ChevronUpIcon from "../../assets/icons/ChevronUpIcon.vue";

const state = ref<number>(0);
const changeState = () => {
  state.value = state.value === 2 ? 0 : state.value + 1;
}
</script>

<template>
  <div :class="{ active: state > 0 }" @click="changeState()">
    <ChevronUpIcon v-if="state < 2" />
    <ChevronDownIcon v-else />
  </div>
</template>

<style lang="scss" scoped>
.active{
  color: red;
}
</style>
