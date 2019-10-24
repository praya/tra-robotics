import React from 'react';
import { storiesOf } from '@storybook/react';
import { PropFilter } from '../PropFilter';
import { Compare } from '../../../utils/Compare';
import { reviewOptions } from '../../../../services/filters';
import mockupImage from './mockup.png';


storiesOf('SubMenu', module)
    .add('SubMenu',
        () => (
            <Compare mockup={mockupImage}>
                <PropFilter
                    title="Assembly"
                    selected="any"
                    options={reviewOptions}
                    onSelectFilter={console.info}
                />
            </Compare>
        )
    );
