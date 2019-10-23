import { PropFilterConfig } from '../components/filters/Filters';


export const filters: Array<PropFilterConfig> = [
    {
        id: 'assembly',
        name: 'Assembly',
        selected: 'any',
        items: [
            { id: 'any', name: 'Any' },
            { id: 'in_review', name: 'In Review' },
            { id: 'review_finished', name: 'Review Finished' },
        ]
    },
    {
        id: 'review',
        name: 'Review',
        selected: 'any',
        items: [
            { id: 'any', name: 'Any' },
            { id: 'draft', name: 'Draft' },
            { id: 'solved', name: 'Solved' },
            { id: 'simulation_requested', name: 'Simulation Requested' },
            { id: 'simulation_positive', name: 'Simulation Positive' },
            { id: 'simulation_negative', name: 'Simulation Negative' },
        ]
    }
];
