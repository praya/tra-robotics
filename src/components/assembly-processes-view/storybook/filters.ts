import { SubMenu } from '../../menu/Menu';


export const filters: SubMenu[] = [
    {
        id: 'assembly',
        title: 'Assembly',
        items: [
            { id: 'any', title: 'Any', selected: true },
            { id: 'in_review', title: 'In Review' },
            { id: 'review_finished', title: 'Review Finished' },
        ]
    },
    {
        id: 'review',
        title: 'Review',
        items: [
            { id: 'any', title: 'Any', selected: true },
            { id: 'draft', title: 'Draft' },
            { id: 'solved', title: 'Solved' },
            { id: 'simulation_requested', title: 'Simulation Requested' },
            { id: 'simulation_positive', title: 'Simulation Positive' },
            { id: 'simulation_negative', title: 'Simulation Negative' },
        ]
    }
];
