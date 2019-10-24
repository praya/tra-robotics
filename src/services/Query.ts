export interface Query {
    q?: string;
    assembly?: string;
    review?: string;
    start: number;
    end: number;
    sort: string;
    order: string;
}
