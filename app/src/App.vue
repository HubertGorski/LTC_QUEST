<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { TeamEasy } from "./components/teams/model/TeamEasy";
import { Task } from "./components/tasks/model/Task";
import HomeIcon from "@/assets/icons/HomeIcon.vue";
import TasksIcon from "@/assets/icons/TasksIcon.vue";
import TrophyIcon from "@/assets/icons/TrophyIcon.vue";
import UserIcon from "@/assets/icons/UserIcon.vue";
import BingoIcon from "@/assets/icons/BingoIcon.vue";
import { LOCATION } from "./components/pages/enumLocationTitles";

const locationTitle = ref<string>(LOCATION.MAIN_PAGE);

const teams = ref<TeamEasy[]>([]);
fetch("http://localhost:5000/getAllTeams")
  .then((response) => response.json())
  .then((data) => (teams.value = data.data));

const tasks = ref<Task[]>([]);
fetch("http://localhost:5000/getAllTasks")
  .then((response) => response.json())
  .then((data) => (tasks.value = data.data));
</script>

<template>
  <div class="app">
    <div class="top-panel">
      <Transition name="main-panel">
        <div class="top-panel__tab-name">{{ locationTitle }}</div>
      </Transition>
      <RouterLink
        @click="locationTitle = LOCATION.SIGNIN_PANEL"
        class="top-panel__user-icon"
        :to="{
          name: 'signin',
        }"
        ><p>Uczestnik</p>
        <UserIcon class="icon" />
      </RouterLink>
    </div>
    <div class="main-panel">
      <Transition name="main-panel">
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </Transition>
    </div>
    <nav class="bottom-panel">
      <ul>
        <li>
          <RouterLink
            @click="locationTitle = LOCATION.MAIN_PAGE"
            :to="{
              name: 'home',
            }"
            ><HomeIcon class="icon" />
            <p>Główna</p></RouterLink
          >
        </li>
        <li>
          <RouterLink
            @click="locationTitle = LOCATION.TASKS_LIST"
            :to="{
              name: 'tasklist',
              params: { team: 'Kiryny' },
            }"
            ><TasksIcon class="icon" />
            <p>Zadania</p></RouterLink
          >
        </li>
        <li>
          <RouterLink
            @click="locationTitle = LOCATION.RANKING"
            :to="{
              name: 'ranking',
            }"
            ><TrophyIcon class="icon" />
            <p>Ranking</p></RouterLink
          >
        </li>
        <li>
          <RouterLink
            @click="locationTitle = LOCATION.BINGO"
            :to="{
              name: 'bingo',
            }"
            ><BingoIcon class="icon" />
            <p>Bingo</p></RouterLink
          >
        </li>
        <!-- <li>
            <DarkModeBtn class="icon" @click="toggleDark()" />
            <p v-if="isDark">Ciemny</p>
            <p v-else>Jasny</p>
          </li> -->
        <!-- <li v-for="team in teams" :key="team.id">
          <RouterLink
            :to="{
              name: 'tasklist',
              params: { team: team.name },
            }"
          ></RouterLink>
        </li> -->
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;

  a {
    text-decoration: none;
    color: var(--color-text);
    line-height: 1.2;
  }
  .top-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem;
    font-size: 1.6rem;
    font-weight: 600;
    border-bottom: 0.1rem solid var(--color-text);
    .top-panel__user-icon {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
  .main-panel {
    flex-grow: 1;
  }
  ul {
    display: flex;
    justify-content: space-around;
    padding: 0.6rem 1.2rem;
    list-style: none;
    border-top: 0.1rem solid var(--color-text);

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }
}
.icon {
  width: 2.8rem;
  height: 2.8rem;
  font-size: 0.6rem;
  color: var(--color-text);
}
// ANIMATIONS
.main-panel-enter-active {
  transition: all 0.4s ease-out;
}

.main-panel-leave-active {
  transition: all 0.4s;
}

.main-panel-enter-from,
.main-panel-leave-to {
  opacity: 0;
}
</style>
