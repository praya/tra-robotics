import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../Card';
import { Compare } from '../../utils/Compare';
import mockupDefaultImage from './mockup-default.png';
import mockupHoverImage from './mockup-hover.png';
import photoImage from '../photo.png';
import moment from 'moment';


storiesOf('Card', module)
    .add('Default',
        () => (
            <Compare mockup={mockupDefaultImage}>
                <div style={{ margin: '6px 0 0 12px', width: '1136px' }}>
                    <Card item={{
                        '_id': '5d4193af0717dd5261aac038',
                        'img': photoImage,
                        'age': 28,
                        'assemblyStatus': 'IN_REVIEW',
                        'reviewStatus': 'DRAFT',
                        'title': 'S6: Center Structure',
                        'updated': moment().subtract(20, 'minutes').toISOString()
                    }} />
                </div>
            </Compare>
        )
    )
    .add('Hover',
        () => (
            <Compare mockup={mockupHoverImage}>
                <div style={{ margin: '6px 0 0 12px', width: '1136px' }}>
                    <Card data-state="hover" item={{
                        '_id': '5d4193af0717dd5261aac038',
                        'img': photoImage,
                        'age': 28,
                        'assemblyStatus': 'IN_REVIEW',
                        'reviewStatus': 'SIMULATION_FINISHED',
                        'title': 'S6: Center Structure v2.0',
                        'updated': '2019-04-20 15:00:00'
                    }} />
                </div>
            </Compare>
        )
    );
