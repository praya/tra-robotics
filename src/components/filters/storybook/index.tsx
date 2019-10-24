import React from 'react';
import { storiesOf } from '@storybook/react';
import { Filters } from '../Filters';
import { Compare } from '../../utils/Compare';
import { assemblyFilter, reviewFilter } from '../../../services/filters';
import mockupImage from './mockup.png';


storiesOf('Menu', module)
    .add('Menu',
        () => (
            <Compare mockup={mockupImage}>
                <Filters
                    title="Filter"
                    activeOptions={{
                        [assemblyFilter.id]: assemblyFilter.items[0].value,
                        [reviewFilter.id]: reviewFilter.items[0].value,
                    }}
                    filters={[assemblyFilter, reviewFilter]}
                    onSelectFilter={console.info}
                />
            </Compare>
        )
    );
