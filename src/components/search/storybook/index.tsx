import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Search } from '../Search';
import { Compare } from '../../utils/Compare';
import mockupImage from './mockup.png';


storiesOf('Search', module)
    .add('Default',
        () => (
            <Compare mockup={mockupImage}>
                <Search onChange={action('on-change')} value="" placeholder="Search by assembly name" />
            </Compare>
        )
    );
