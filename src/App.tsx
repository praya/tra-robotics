import React from 'react';
import { AssemblyProcessesView } from './components/assembly-processes-view/AssemblyProcessesView';
import { State } from './components/toggle/Toggle';
import { filters } from './services/filters';


const priorities: [State, State] = [
    { id: 'latest_first', title: 'Latest first' },
    { id: 'oldest_first', title: 'Old first' },
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
