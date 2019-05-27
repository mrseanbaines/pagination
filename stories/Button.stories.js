import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Button', module);

stories.add('default', () => <button>hello world</button>);
