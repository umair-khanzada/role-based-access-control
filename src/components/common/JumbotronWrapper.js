import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'react-bootstrap';

const JumbotronWrapper = (props) => {
	return (
		<Jumbotron>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
			<div style={{color: '#0056b3'}}>{props.children}</div>
		</Jumbotron>
	);
};

JumbotronWrapper.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string
};

JumbotronWrapper.defaultProps = {
	description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
};

export default JumbotronWrapper;
