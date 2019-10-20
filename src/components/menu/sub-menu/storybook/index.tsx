import React from 'react';
import { storiesOf } from '@storybook/react';
import { SubMenu } from '../SubMenu';
import { Compare } from '../../../utils/Compare';
import mockupImage from './mockup.png';


storiesOf('SubMenu', module)
    .add('SubMenu',
        () => (
            <Compare mockup={mockupImage}>
                <SubMenu title="Assembly" items={[
                    { id: 'any', title: 'Any', onClick: () => undefined, selected: true },
                    { id: 'in_review', title: 'In Review', onClick: () => undefined, selected: false },
                    { id: 'review_finished', title: 'Review Finished', onClick: () => undefined, selected: false },
                ]} />
            </Compare>
        )
    );
