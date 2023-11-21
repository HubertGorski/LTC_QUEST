import { Team } from "../../teams/model/Team";
import { User } from "../../users/model/User";

export class Task {
  id: number;
  title: string;
  description: string;
  creater: User;
  createdDate: Date;
  points: number;

  constructor(
    id: number,
    title: string,
    description: string,
    creater: User,
    createdDate: Date,
    points: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.creater = creater;
    this.createdDate = createdDate;
    this.points = points;
  }

  getTaskStatus(team: Team) {
    return team.tasks[this.id].status;
  }
}
