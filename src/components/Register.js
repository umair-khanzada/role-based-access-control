import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { JumbotronWrapper } from './common';

function Register() {
	return (
		<JumbotronWrapper title="Register">
			<Link to="/login">
				Back to login
			</Link>
		</JumbotronWrapper>
	)
}

export default memo(Register);
