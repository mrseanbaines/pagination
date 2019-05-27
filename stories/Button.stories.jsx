import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Button', module);

stories.add('default', () => <button type="button">hello world</button>);
