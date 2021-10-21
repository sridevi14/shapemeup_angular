import { Warmup as Warmup } from './warmup.interface';

export interface WarmupPlan {
    name: string;
    type: string;
    warmup: Warmup[];
}
