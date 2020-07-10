import React, { memo } from 'react';
import { JumbotronWrapper } from './common';
import { Link } from 'react-router-dom';

function Register() {
	return (
		<JumbotronWrapper title="Register">
			<Link className="nav-link" to="/">
				Back to login
			</Link>
		</JumbotronWrapper>
	)
}

export default memo(Register);
