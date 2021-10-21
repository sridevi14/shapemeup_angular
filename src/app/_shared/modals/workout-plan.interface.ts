import { Workout as Workout } from './workout.interface';

export interface WorkoutPlan {
    name: string;
    type?: string;
    workouts: Workout[];
}