import { Filter } from './filtering/Filter';


export const filters: Array<Filter> = [
    {
        id: 'assembly',
        name: 'Assembly',
        items: [
            { id: 'any', name: 'Any', selected: true },
            { id: 'in_review', name: 'In Review' },
            { id: 'review_finished', name: 'Review Finished' },
        ]
    },
    {
        id: 'review',
        name: 'Review',
        items: [
            { id: 'any', name: 'Any', selected: true },
            { id: 'draft', name: 'Draft' },
            { id: 'solved', name: 'Solved' },
            { id: 'simulation_requested', name: 'Simulation Requested' },
            { id: 'simulation_positive', name: 'Simulation Positive' },
            { id: 'simulation_negative', name: 'Simulation Negative' },
        ]
    }
];
