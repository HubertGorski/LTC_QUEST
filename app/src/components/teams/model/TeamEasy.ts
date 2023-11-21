import type { StatusTask } from "../../tasks/model/StatusTask";
import type { User } from "../../users/model/User";

export class TeamEasy {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
