export interface Food {
  name?: string;
  unit?: string;
  note?: string;
  quantity?: number;
  foodItem:string;
}

export interface DietPlanTemplate {
  name: string;
  id?: string;
  coachID?: string;
  foods: Food[];
}

export interface DietPlanScheduleDay {
  day: number;
  foods: Food[];
}
export interface DietPlanSchedule {
  clientID: string;
  createdDate: Date;
  dietPlanScheduleDetails: DietPlanScheduleDay[];
  history?: HistoryDetails[];
}
export interface HistoryDetails {
  createdDate: Date;
  endDate: Date;
  dietPlanScheduleDetails: DietPlanScheduleDay[];
}