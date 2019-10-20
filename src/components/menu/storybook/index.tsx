import React from 'react';
import { storiesOf } from '@storybook/react';
import { Menu } from '../Menu';
import { Compare } from '../../utils/Compare';
import mockupImage from './mockup.png';


storiesOf('Menu', module)
    .add('Menu',
        () => (
            <Compare mockup={mockupImage}>
                <Menu
                    title="Filter"
                    menus={[
                        {
                            title: 'Assembly', items: [
                                { id: 'any', title: 'Any', selected: true },
                                { id: 'in_review', title: 'In Review' },
                                { id: 'review_finished', title: 'Review Finished' },
                            ]
                        },
                        {
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
                    ]}
                />
            </Compare>
        )
    );
