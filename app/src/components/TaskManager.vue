<script setup lang="ts">
import CheckIcon from "@/assets/icons/CheckIcon.vue";
import SortBtn from "./buttons/SortBtn.vue";
import { ref } from "vue";
import { changeState } from "@/components/buttons/ThreePosition";

const sortNameStatus = ref<number>(0);
const sortPointsStatus = ref<number>(0);
const sortIsDoneStatus = ref<number>(0);

const sortByName = () => {
  sortNameStatus.value = changeState(sortNameStatus.value);
  console.log("Sortowanie po name");
};

const sortByPoints = () => {
  sortPointsStatus.value = changeState(sortPointsStatus.value);
  console.log("Sortowanie po pointsach");
};

const sortByIsDone = () => {
  sortIsDoneStatus.value = changeState(sortIsDoneStatus.value);
  console.log("Sortowanie po statusie ukończenia");
};
</script>

<template>
  <div class="taskManager">
    <div class="taskManager__btn">
      <div class="filterBar__search"></div>
    </div>
    <div class="taskManager__btn">
      <CheckIcon class="filterBar__statuses filterIcon" />
    </div>
    <div class="taskManager__btn">
      <div class="filterBar__points"></div>
    </div>
    <div @click="sortByName()" class="taskManager__btn">
      <SortBtn :state="sortNameStatus" class="sortBar__search sortIcon" />
    </div>
    <div @click="sortByPoints()" class="taskManager__btn">
      <SortBtn :state="sortPointsStatus" class="sortBar__statuses sortIcon" />
    </div>
    <div @click="sortByIsDone()" class="taskManager__btn">
      <SortBtn :state="sortIsDoneStatus" class="sortBar__points sortIcon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.taskManager {
  display: grid;
  grid-template-columns: auto 4.8rem 4.8rem;
  grid-template-rows: 4.8rem 2.8rem;
  margin: 1.2rem 0.6rem;
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid var(--color-text);
    margin: 0.2rem;
    border-radius: 0.6rem;
  }
  .filterIcon {
    width: 3.6rem;
    height: 3.6rem;
  }
  .sortIcon {
    width: 2.4rem;
    height: 2.4rem;
  }
}
</style>
