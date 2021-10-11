import { ICourse } from "./ICourse";

export interface ITeam {
  id: number;
  yearCreation: number;
  name: string;
  course: ICourse;
}
