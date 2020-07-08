import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'react-bootstrap';
import NotFound from './NotFound';

export default {
	component: NotFound,
	title: 'NotFound',
};

export const NotFoundWithoutProps = () => (
	<NotFound onClick={action('clicked')}>
		<Button>Back to home</Button>
	</NotFound>
);

export const NotFoundWithTitle = () => (
	<NotFound onClick={action('clicked')} jumbotronProps={{title: 'Not found!!'}}>
		<Button>Custom title</Button>
	</NotFound>
);

export const NotFoundWithDescription = () => (
	<NotFound onClick={action('clicked')} jumbotronProps={{
		title: 'Not found!!',
		description: "A custom description is a description written by a player to describe their own character, an indoors location or an item. Custom descriptions for characters were the first of these to get implemented"
	}}>
		<Button>Custom description</Button>
	</NotFound>
);


