import { ITeam } from "./ITeam";

export interface ITask {
  id: number;
  team: ITeam;
  title: string;
  description: string;
  subject: string;
  startDate: Date;
  finalDate: Date;
  startTime: string;
  finalTime: string;
  maximumScore: number;
}
