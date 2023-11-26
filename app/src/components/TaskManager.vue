<script setup lang="ts">
import { ref } from "vue";
import PositionBtn from "./buttons/PositionBtn.vue";
import { sortStates, sortIcons } from "./buttons/model/SortStates";
import {
  filterPointsStates,
  filterPointsIcons,
} from "./buttons/model/FilterPointsStates";
import {
  filterIsDoneStates,
  filterIsDoneIcons,
} from "./buttons/model/FilterIsDoneStates";

const prop = defineProps({
  isTeamView: {
    type: Boolean,
    default: false,
  },
});

const filterPointsStatus = ref<number>(0);
const filterIsDoneStatus = ref<number>(0);
const sortNameStatus = ref<number>(0);
const sortIsDoneStatus = ref<number>(0);
const sortPointsStatus = ref<number>(0);

const filterByIsDone = (state: number) => {
  filterIsDoneStatus.value = state;
  console.log("Filtrowanie po statusie zadania");
};

const filterByPoints = (state: number) => {
  filterPointsStatus.value = state;
  console.log("Filtrowanie po pointsach");
};

const sortByName = (state: number) => {
  sortNameStatus.value = state;
  console.log("Sortowanie po name");
  sortIsDoneStatus.value = 0;
  sortPointsStatus.value = 0;
};

const sortByIsDone = (state: number) => {
  sortIsDoneStatus.value = state;
  console.log("Sortowanie po statusie ukończenia");
  sortPointsStatus.value = 0;
  sortNameStatus.value = 0;
};

const sortByPoints = (state: number) => {
  sortPointsStatus.value = state;
  console.log("Sortowanie po pointsach");
  sortIsDoneStatus.value = 0;
  sortNameStatus.value = 0;
};
</script>

<template>
  <div class="taskManager" :class="{ isTeamView: isTeamView }">
    <div class="taskManager__btn">Szukaj</div>
    <PositionBtn
      v-if="prop.isTeamView"
      :state="filterIsDoneStatus"
      :nameStates="filterIsDoneStates"
      :icons="filterIsDoneIcons"
      @changeState="filterByIsDone"
      class="taskManager__btn"
    />
    <PositionBtn
      :state="filterPointsStatus"
      :nameStates="filterPointsStates"
      :icons="filterPointsIcons"
      @changeState="filterByPoints"
      class="taskManager__btn"
    />
    <PositionBtn
      :state="sortNameStatus"
      :nameStates="sortStates"
      :icons="sortIcons"
      @changeState="sortByName"
      class="taskManager__btn"
    />
    <PositionBtn
      v-if="prop.isTeamView"
      :state="sortIsDoneStatus"
      :nameStates="sortStates"
      :icons="sortIcons"
      @changeState="sortByIsDone"
      class="taskManager__btn"
    />
    <PositionBtn
      :state="sortPointsStatus"
      :nameStates="sortStates"
      :icons="sortIcons"
      @changeState="sortByPoints"
      class="taskManager__btn"
    />
  </div>
</template>

<style lang="scss" scoped>
.taskManager {
  &.isTeamView {
    grid-template-columns: auto 4.8rem 4.8rem;
  }
  display: grid;
  grid-template-rows: 4.8rem 2.8rem;
  grid-template-columns: auto 4.8rem;
  margin: 1.2rem 0.6rem;
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid var(--color-text);
    margin: 0.2rem;
    border-radius: 0.6rem;
  }
}
</style>
