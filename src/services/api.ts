export type AssemblyStatus = 'REVIEW_FINISHED' | 'IN_REVIEW';

export type ReviewStatus = 'DRAFT' | 'SIMULATION_NEGATIVE' | 'SIMULATION_POSITIVE' | 'SIMULATION_REQUESTED' | 'SOLVED';

export interface AssemblyProcessItem {
    "_id": string;
    "img": string;
    "age": number;
    "assemblyStatus": AssemblyStatus;
    "reviewStatus": ReviewStatus,
    "title": string;
    "updated": string;
}
