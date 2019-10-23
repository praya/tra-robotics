import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import '../src/index.css';


const req = requireContext('../src', true, /storybook\/.+\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
