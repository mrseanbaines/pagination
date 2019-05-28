import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from '../src';

const stories = storiesOf('Pagination', module);

stories.add('default', () => <Pagination totalItems={235} onPageChange={action('Page change')} />);

stories.add('with ellipsis', () => (
  <Pagination totalItems={235} showEllipsis onPageChange={action('Page change')} />
));
