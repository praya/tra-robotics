import React from 'react';
import { storiesOf } from '@storybook/react';
import { Info } from '../Info';
import { Compare } from '../../../utils/Compare';
import mockupDraftImage from './mockup-draft.png';
import mockupNegativeImage from './mockup-negative.png';
import mockupPositiveImage from './mockup-positive.png';


storiesOf('Info', module)
    .add('Draft',
        () => (
            <Compare mockup={mockupDraftImage}>
                <Info title="S6: Center Structure" reviewStatus="DRAFT" updatedAt="20 minutes ago" />
            </Compare>
        )
    )
    .add('Negative',
        () => (
            <Compare mockup={mockupNegativeImage}>
                <Info title="S1–S4: Underbody" reviewStatus="SIMULATION_NEGATIVE" updatedAt="20/04/2019, 16:00" />
            </Compare>
        )
    )
    .add('Positive',
        () => (
            <Compare mockup={mockupPositiveImage}>
                <Info title="S1: Center Structure" reviewStatus="SIMULATION_POSITIVE" updatedAt="20/04/2019, 16:00" />
            </Compare>
        )
    );
