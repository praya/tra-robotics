import React from 'react';
import { storiesOf } from '@storybook/react';
import { Filters } from '../Filters';
import { Compare } from '../../utils/Compare';
import mockupImage from './mockup.png';
import { filters } from '../../../services/filters';


storiesOf('Menu', module)
    .add('Menu',
        () => (
            <Compare mockup={mockupImage}>
                <Filters
                    title="Filter"
                    menus={filters}
                />
            </Compare>
        )
    );
