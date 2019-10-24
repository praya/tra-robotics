import React from 'react';
import { storiesOf } from '@storybook/react';
import { AssemblyProcessesView } from '../AssemblyProcessesView';
import { Compare } from '../../utils/Compare';
import mockupImage from './mockup.png';


storiesOf('Assembly Processes', module)
    .add('Default',
        () => (
            <Compare mockup={mockupImage}>
                <div style={{ width: '1680px' }}>
                    <AssemblyProcessesView />
                </div>
            </Compare>
        )
    );
