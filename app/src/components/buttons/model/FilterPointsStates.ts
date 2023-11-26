import { ToggleIcons } from "@/assets/icons/model/ToggleIcons";
import { States } from "./States";

export enum FILTER_POINTS_STATES {
  POSITIVE = "positive",
  ALL = "all",
  NEGATIVE = "negative",
}

export const filterPointsStates: States = new States(
  FILTER_POINTS_STATES.POSITIVE,
  FILTER_POINTS_STATES.ALL,
  FILTER_POINTS_STATES.NEGATIVE
);

export const filterPointsIcons: ToggleIcons = new ToggleIcons(
  "HappyFaceIcon",
  "SadFaceIcon"
);
