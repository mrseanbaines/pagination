import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from '../src';

const stories = storiesOf('Pagination', module);

stories.add('default', () => <Pagination totalItems={235} onPageChange={action('Page change')} />);

stories.add('with 10 items per page', () => (
  <Pagination totalItems={235} onPageChange={action('Page change')} itemsPerPage={10} />
));

stories.add('with page siblings', () => (
  <Pagination totalItems={235} onPageChange={action('Page change')} pageSiblings={1} />
));
