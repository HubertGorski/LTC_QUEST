<script setup lang="ts">
import { ToggleIcons } from "@/assets/icons/model/ToggleIcons";
import { States } from "./model/States";
import { defineAsyncComponent } from 'vue'

const emit = defineEmits(["changeState"]);
const prop = defineProps({
  state: {
    type: Number,
    required: true,
  },
  nameStates: {
    type: States,
    required: true,
  },
  icons: {
    type: ToggleIcons,
    required: true,
  },
});

const icon1 = defineAsyncComponent(() =>
  import(`../../assets/icons/${prop.icons.icon1}.vue`)
)
const icon2 = defineAsyncComponent(() =>
  import(`../../assets/icons/${prop.icons.icon2}.vue`)
)
const countStates = prop.nameStates.getNameStates().length;
const changeState = () => {
  emit("changeState", prop.state + 1 === countStates ? 0 : prop.state + 1);
};
</script>

<template>
  <div
  :class="{ active: state > 0 && countStates === 3 }"
  @click="changeState()"
  >
  <icon1 class="icon" v-if="state < countStates - 1"/>
  <icon2 class="icon" v-else/>
  </div>
</template>

<style lang="scss" scoped>
.active {
  color: var(--red);
}
.icon {
  padding: 0.1rem;
  height: 100%;
}
</style>
