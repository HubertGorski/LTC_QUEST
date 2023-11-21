import type { StatusTask } from "../../tasks/model/StatusTask";
import type { User } from "../../users/model/User";

export class Team {
  id: number;
  name: string;
  color: string;
  points: number = 0;
  tasks: StatusTask[];
  tutor: User;

  constructor(
    id: number,
    name: string,
    color: string,
    tasks: StatusTask[],
    tutor: User
  ) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.tasks = tasks;
    this.tutor = tutor;
  }

  addPoints(points: number) {
    this.points += points;
  }
}
