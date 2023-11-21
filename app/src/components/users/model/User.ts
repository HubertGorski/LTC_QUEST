import { Team } from "../../teams/model/Team";

export class User {
  id: number;
  rank: string;
  name: string;
  team: Team;
  img: string;

  constructor(id: number, rank: string, name: string, team: Team, img = "") {
    this.id = id;
    this.rank = rank;
    this.name = name;
    this.team = team;
    this.img = img;
  }
}
