import { ITeam } from "./ITeam";

export interface ITask {
  id: number;
  team: ITeam;
  title: string;
  description: string;
  subject: string;
  startDate: string;
  finalDate: string;
  startTime: string;
  finalTime: string;
  maximumScore: number;
}
