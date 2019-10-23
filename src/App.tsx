import React from 'react';
import { AssemblyProcessesView } from './components/assembly-processes-view/AssemblyProcessesView';
import { State } from './components/toggle/Toggle';
import { SubMenu } from './components/menu/Menu';


const priorities: [State, State] = [
    { id: 'latest_first', title: 'Latest first' },
    { id: 'oldest_first', title: 'Old first' },
];

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

export const App: React.FC = () => {
    return (
        <div>
            <AssemblyProcessesView
                items={[]}
                filters={filters}
                priorities={priorities}
                priority={priorities[0].id}
                onPriorityChange={console.info}
            />
        </div>
    );
};
