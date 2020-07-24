import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import { JumbotronWrapper } from './common';
import { CenterToScreen } from './common/hoc';

function ForgotPassword() {
	return (
		<Col md="6">
			<JumbotronWrapper title="ForgotPassword">
				<Link to="/login">
					Back to login
				</Link>
			</JumbotronWrapper>
		</Col>
	)
}

export default memo(CenterToScreen(ForgotPassword));
