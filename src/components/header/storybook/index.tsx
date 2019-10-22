import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../Header';
import { Compare } from '../../utils/Compare';
import mockupImage from './mockup.png';


storiesOf('Header', module)
    .add('Default',
        () => (
            <Compare mockup={mockupImage}>
                <Header>
                    ––
                </Header>
            </Compare>
        )
    );
