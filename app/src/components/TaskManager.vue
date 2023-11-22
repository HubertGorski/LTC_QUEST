<script setup lang="ts">
import CheckIcon from '@/assets/icons/CheckIcon.vue';
import SortBtn from './buttons/SortBtn.vue';
const xd = () => {
 console.log('xd');
 
}
</script>

<template>
  <div class="taskManager">
      <div class="filterBar__search"></div>
      <CheckIcon class="filterBar__statuses icon"/>
      <div class="filterBar__points"></div>
      <SortBtn class="sortBar__search icon" @click="xd()"/>
      <SortBtn class="sortBar__statuses icon"/>
      <SortBtn class="sortBar__points icon"/>
  </div>
</template>

<style lang="scss" scoped>
.taskManager {
  display: grid;
  grid-template-columns: auto 5.2rem 5.2rem;
  grid-template-rows: 5.2rem 3.2rem;
  margin: 1.2rem 0.6rem;
  border: 0.1rem solid var(--color-text);
  .icon {
    width: 3.2rem;
    height: 3.2rem;
    margin: 0 auto;
  }
}
</style>
