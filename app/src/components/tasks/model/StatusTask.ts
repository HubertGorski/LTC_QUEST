import { Team } from "../../teams/model/Team";
import { User } from "../../users/model/User";
import type { Task } from "./Task";

export class StatusTask {
  id: number;
  task: Task;
  status: boolean;
  accepter: User;
  acceptDate: Date;
  team: Team;

  constructor(
    id: number,
    task: Task,
    status: boolean,
    accepter: User,
    acceptDate: Date,
    team: Team
  ) {
    this.id = id;
    this.task = task;
    this.status = status;
    this.accepter = accepter;
    this.acceptDate = acceptDate;
    this.team = team;
  }
}
