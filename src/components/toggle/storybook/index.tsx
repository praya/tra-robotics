import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Toggle } from '../Toggle';
import { Compare } from '../../utils/Compare';
import mockupImage from './mockup.png';


storiesOf('Toggle', module)
    .add('Default',
        () => {
            const states: [State, State] = [
                { id: 'latest', title: 'Latest first' },
                { id: 'old', title: 'Old first' },
            ];

            const [state, setState] = React.useState(states[0]);

            return (
                <Compare mockup={mockupImage}>
                    <div style={{ margin: '2px 0 0 4px' }}>
                        <Toggle
                            states={states}
                            active={state.id}
                            onStateChange={setState}
                        />
                    </div>
                </Compare>
            );
        }
    );
