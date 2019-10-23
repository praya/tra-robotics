import React from 'react';
import { storiesOf } from '@storybook/react';
import { PageHeader } from '../PageHeader';
import { Compare } from '../../../utils/Compare';
import { State } from '../../../toggle/Toggle';
import mockupImage from './mockup.png';


const priorities: [State, State] = [
    { id: 'latest_first', title: 'Latest first' },
    { id: 'oldest_first', title: 'Old first' },
];

storiesOf('PageHeader', module)
    .add('Default',
        () => (
            <Compare mockup={mockupImage}>
                <div style={{ width: '1136px' }}>
                    <PageHeader
                        count={220}
                        priority={priorities[0].id}
                        priorities={priorities}
                        onPriorityChange={console.info}
                    />
                </div>
            </Compare>
        )
    );
