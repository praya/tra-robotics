import React from 'react';
import { storiesOf } from '@storybook/react';
import { AssemblyProcessesView } from '../AssemblyProcessesView';
import { Compare } from '../../utils/Compare';
import mockupImage from './mockup.png';
import { items } from './assemblyProcessItems';
import { filters } from './filters';
import { State } from '../../toggle/Toggle';


const priorities: [State, State] = [
    { id: 'latest_first', title: 'Latest first' },
    { id: 'oldest_first', title: 'Old first' },
];

storiesOf('Assembly Processes', module)
    .add('Default',
        () => (
            <Compare mockup={mockupImage}>
                <div style={{ width: '1680px' }}>
                    <AssemblyProcessesView
                        priorities={priorities}
                        priority={priorities[0].id}
                        onPriorityChange={console.info}
                        filters={filters} items={items}
                    />
                </div>
            </Compare>
        )
    );
