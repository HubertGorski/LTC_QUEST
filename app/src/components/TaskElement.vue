<script setup lang="ts">
import { ref } from "vue";
import { Task } from "./tasks/model/Task";

const prop = defineProps({
  isTeamView: {
    type: Boolean,
    default: false,
  },
  task: {
    type: Task,
    required: false,
  },
});
</script>

<template>
  <div class="taskElement" :class="{ isTeamView: isTeamView }">
    <div class="taskElement__task">
      <div class="Title">Posejdon pije balsam</div>
      <div class="Description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        minus saepe culpa sit reprehenderit animi reiciendis nam tenetur
        ratione, minima molestiae, iste a temporibus assumenda ipsum quae libero
        cum sed.
      </div>
    </div>
    <div class="taskElement__points">5</div>
  </div>
</template>

<style lang="scss" scoped>
.taskElement {
  &.isTeamView {
    grid-template-columns: auto 4.8rem 4.8rem;
  }
  display: flex;
  padding: 0.6rem;
  gap: 0.6rem;

  &__task {
    padding: 1.2rem;
    border: 0.1rem solid var(--color-text);
    border-radius: 0.6rem;
    flex-grow: 1;
  }
  // grid-template-rows: 4.8rem 2.8rem;
  // grid-template-columns: auto 4.8rem;
  &__points {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid var(--color-text);
    border-radius: 0.6rem;
    min-width: 4.8rem;
    height: 4.8rem;
  }
}
</style>
