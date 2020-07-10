import React, { memo } from 'react';
import { JumbotronWrapper } from './common';
import { Link } from 'react-router-dom';

function ForgotPassword() {
	return (
		<JumbotronWrapper title="ForgotPassword">
			<Link className="nav-link" to="/">
				Back to login
			</Link>
		</JumbotronWrapper>
	)
}

export default memo(ForgotPassword);
