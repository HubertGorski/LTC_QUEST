import { ToggleIcons } from "@/assets/icons/model/ToggleIcons";
import { States } from "./States";

export enum SORT_STATES {
  ASC = "asc",
  ALL = "all",
  DESC = "desc",
}

export const sortStates: States = new States(
  SORT_STATES.ASC,
  SORT_STATES.ALL,
  SORT_STATES.DESC
);

export const sortIcons: ToggleIcons = new ToggleIcons(
  "ChevronUpIcon",
  "ChevronDownIcon"
);
