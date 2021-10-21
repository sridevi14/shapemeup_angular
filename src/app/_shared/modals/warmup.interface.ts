export interface WarmupCategory {
    name?: string;
    warmup?: Warmup[];
}
export interface Warmup {
    name: string;
    description: string;
    rep: number;
    set: number;
    time: string;
    rest: string;
    url: string;
    note: string;
    categoryID: string;
}

