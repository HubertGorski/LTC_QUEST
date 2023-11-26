import { ToggleIcons } from "@/assets/icons/model/ToggleIcons";
import { States } from "./States";

export enum FILTER_IS_DONE_STATES {
  DONE = "done",
  ALL = "all",
  UNDONE = "undone",
}

export const filterIsDoneStates: States = new States(
  FILTER_IS_DONE_STATES.DONE,
  FILTER_IS_DONE_STATES.ALL,
  FILTER_IS_DONE_STATES.UNDONE
);

export const filterIsDoneIcons: ToggleIcons = new ToggleIcons(
  "CheckIcon",
  "UnCheckIcon"
);
