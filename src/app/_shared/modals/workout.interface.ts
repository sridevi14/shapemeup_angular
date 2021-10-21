export interface WorkoutCategory {
    name: string;
    id?: string;
}
export interface Workout {
    id?: string;
    name: string;
    description: string;
    set?: number;
    rep?: number;
    time?: string;
    rest?: string;
    url: string;
    note: string;
    category: WorkoutCategory;
}

export interface WorkoutTemplate {
    name: string;
    id?: string;
    coachID?: string;
    workouts: Workout[];
}
export interface WorkoutScheduleDay {
    day: number;
    workouts: Workout[];
}
export interface WorkoutSchedule {
    clientID: string;
    createdDate: Date;
    workoutScheduleDetails: WorkoutScheduleDay[];
    history?: HistoryDetails[];
}
export interface HistoryDetails {
    createdDate: Date;
    endDate: Date;
    WorkoutScheduleDetails: WorkoutScheduleDay[];
}