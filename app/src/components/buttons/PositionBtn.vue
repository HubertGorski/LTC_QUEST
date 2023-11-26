<script setup lang="ts">
import BingoIcon from "@/assets/icons/BingoIcon.vue";
import UserIcon from "@/assets/icons/UserIcon.vue";
import MoonIcon from "@/assets/icons/MoonIcon.vue";
import SunIcon from "@/assets/icons/SunIcon.vue";
import ChevronUpIcon from "@/assets/icons/ChevronUpIcon.vue";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon.vue";
import CheckIcon from "@/assets/icons/CheckIcon.vue";
import UnCheckIcon from "@/assets/icons/UnCheckIcon.vue";
import HappyFaceIcon from "@/assets/icons/HappyFaceIcon.vue";
import SadFaceIcon from "@/assets/icons/SadFaceIcon.vue";
import { ToggleIcons } from "@/assets/icons/model/ToggleIcons";
import { States } from "./model/States";

const icons = {
  BingoIcon,
  UserIcon,
  MoonIcon,
  SunIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  CheckIcon,
  UnCheckIcon,
  HappyFaceIcon,
  SadFaceIcon,
};
const emit = defineEmits(["changeState"]);
const prop = defineProps({
  state: {
    type: Number || Boolean,
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
    <component
      class="icon"
      v-if="state < countStates - 1"
      :is="icons[prop.icons.icon1]"
    />
    <component class="icon" v-else :is="icons[prop.icons.icon2]" />
  </div>
</template>

<style lang="scss" scoped>
.active {
  color: red;
}
.icon {
  padding: 0.1rem;
  height: 100%;
}
</style>
