import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import JumbotronWrapper from './JumbotronWrapper';

const NotFound = (props) => (
	<JumbotronWrapper {...props.jumbotronProps}>
		{props.children}
	</JumbotronWrapper>
);

NotFound.propTypes = {
	jumbotronProps: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string
	})
};

NotFound.defaultProps = {
	jumbotronProps: {
		title: '404 not found'
	},
	children: (<Link to="/">Back to home</Link>)
};

export default memo(NotFound);
