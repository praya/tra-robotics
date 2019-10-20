import React from 'react';
import { storiesOf } from '@storybook/react';

import { Badge } from '../Badge';
import { Compare } from '../../../utils/Compare';
import mockupInReviewImage from './mockup-in-progress.png';
import mockupFinishedImage from './mockup-finished.png';


storiesOf('Badge', module)
    .add('In Review',
        () => (
            <Compare mockup={mockupInReviewImage}>
                <Badge type="IN_REVIEW" />
            </Compare>
        )
    )
    .add('Finished',
        () => (
            <Compare mockup={mockupFinishedImage}>
                <Badge type="REVIEW_FINISHED" />
            </Compare>
        )
    );
