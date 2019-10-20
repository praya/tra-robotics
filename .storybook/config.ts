import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import '../src/App.css';


const req = requireContext('../src', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
