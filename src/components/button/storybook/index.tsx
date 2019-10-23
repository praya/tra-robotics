import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../Button';
import { Compare } from '../../utils/Compare';
import mockupImage from './mockup.png';


storiesOf('Button', module)
    .add('Default',
        () => (
            <Compare mockup={mockupImage}>
                <Button>Edit Process</Button>
            </Compare>
        )
    );
