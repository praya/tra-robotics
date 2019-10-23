import React from 'react';
import { storiesOf } from '@storybook/react';
import { PropFilter } from '../PropFilter';
import { Compare } from '../../../utils/Compare';
import mockupImage from './mockup.png';


storiesOf('SubMenu', module)
    .add('SubMenu',
        () => (
            <Compare mockup={mockupImage}>
                <PropFilter
                    title="Assembly"
                    selected="any"
                    options={[
                        { id: 'any', name: 'Any', onClick: () => undefined },
                        { id: 'in_review', name: 'In Review', onClick: () => undefined },
                        { id: 'review_finished', name: 'Review Finished', onClick: () => undefined },
                    ]}
                />
            </Compare>
        )
    );
