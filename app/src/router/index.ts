import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TaskListView from "@/views/TaskListView.vue";
import TaskDetailsView from "@/views/TaskDetailsView.vue";
import UserOptionsView from "@/views/UserOptionsView.vue";
import BingoView from "@/views/BingoView.vue";
import RankingView from "@/views/RankingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/useroptions",
      name: "useroptions",
      component: UserOptionsView,
    },
    {
      path: "/bingo",
      name: "bingo",
      component: BingoView,
    },
    {
      path: "/ranking",
      name: "ranking",
      component: RankingView,
    },
    {
      path: "/tasklist/:team",
      name: "tasklist",
      component: TaskListView,
    },
    {
      path: "/tasklist/:team&:id",
      name: "taskdetails",
      component: TaskDetailsView,
    },
  ],
});

export default router;
