import { PropFilterConfig } from '../components/filters/Filters';
import { FilterOption } from '../components/filters/prop-filter/PropFilter';


export const assemblyOptions: Array<FilterOption> = [
    { value: '', name: 'Any' },
    { value: 'IN_REVIEW', name: 'In Review' },
    { value: 'REVIEW_FINISHED', name: 'Review Finished' },
];

export const reviewOptions: Array<FilterOption> = [
    { value: '', name: 'Any' },
    { value: 'DRAFT', name: 'Draft' },
    { value: 'SOLVED', name: 'Solved' },
    { value: 'SIMULATION_REQUESTED', name: 'Simulation Requested' },
    { value: 'SIMULATION_POSITIVE', name: 'Simulation Positive' },
    { value: 'SIMULATION_NEGATIVE', name: 'Simulation Negative' },
];


export const assemblyFilter: PropFilterConfig = {
    id: 'assembly',
    name: 'Assembly',
    items: assemblyOptions,
};

export const reviewFilter: PropFilterConfig = {
    id: 'review',
    name: 'Review',
    items: reviewOptions,
};


export const filters: Array<PropFilterConfig> = [
    assemblyFilter,
    reviewFilter,
];
