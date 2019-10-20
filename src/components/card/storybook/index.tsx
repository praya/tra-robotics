import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../Card';
import { Compare } from '../../utils/Compare';
import mockupImage from './mockup.png';
import photoImage from '../photo.png';


storiesOf('Card', module)
    .add('Card',
        () => (
            <Compare mockup={mockupImage}>
                <div style={{ margin: '3px 0 0 4px' }}>
                    <Card item={{
                        '_id': '5d4193af0717dd5261aac038',
                        'img': photoImage,
                        'age': 28,
                        'assemblyStatus': 'IN_REVIEW',
                        'reviewStatus': 'DRAFT',
                        'title': 'S6: Center Structure',
                        'updated': '2018-12-08T02:25:07 -03:00'
                    }} />
                </div>
            </Compare>
        )
    );
