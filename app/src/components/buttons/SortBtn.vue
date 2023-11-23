<script setup lang="ts">
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon.vue";
import ChevronUpIcon from "../../assets/icons/ChevronUpIcon.vue";

const props = defineProps({
  state: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div :class="{ active: props.state > 0 }">
    <ChevronUpIcon v-if="props.state < 2" />
    <ChevronDownIcon v-else />
  </div>
</template>

<style lang="scss" scoped>
.active {
  color: red;
}
</style>
