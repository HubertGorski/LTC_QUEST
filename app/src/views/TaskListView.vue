<script setup lang="ts">
import { TEAMS } from "@/components/teams/model/enumTeams";
import TaskManager from "@/components/taskManager.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import TaskElement from "@/components/TaskElement.vue";
import { Task } from "@/components/tasks/model/Task";
import { User } from "@/components/users/model/User";

const route = useRoute();
const isTeamView: boolean =
  route.params.team === TEAMS.ALL_TEAMS ? false : true;

const transitionName = ref("slide-right");
const activeTeamId = ref<number>(0);
watch(activeTeamId, (val, old) => {
  transitionName.value = val > old ? "slide-left" : "slide-right";
});
</script>

<template>
  <div class="taskListView">
    <TaskManager :isTeamView="isTeamView" />
    <TaskElement />
  </div>
</template>

<style lang="scss" scoped>
.taskListView {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

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
