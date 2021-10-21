export interface Weeklysurvey {
    feeling: string;
    diet: string;
    training: string;
    cardio: string;
    averagesleep: string;
    sleep: number;
    stress: number;
    issues: string;
    goal: string;
    clientID: string;
}

export interface SurveyQuestions{
    question: string;
    type : string;
    options: [];
    answer : string;
}