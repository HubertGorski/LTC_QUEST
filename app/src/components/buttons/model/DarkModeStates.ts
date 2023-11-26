import { ToggleIcons } from "@/assets/icons/model/ToggleIcons";
import { States } from "./States";

export enum DARK_MODE_STATES {
  DARK = "dark",
  LIGHT = "light",
}

export const darkModeStates: States = new States(
  DARK_MODE_STATES.DARK,
  DARK_MODE_STATES.LIGHT
);

export const darkModeIcons: ToggleIcons = new ToggleIcons(
  "MoonIcon",
  "SunIcon"
);
