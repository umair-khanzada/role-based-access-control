import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import { JumbotronWrapper } from './common';
import { CenterToScreen } from './common/hoc';

function Register() {
	return (
		<Col md="6">
			<JumbotronWrapper title="Register">
				<Link to="/login">
					Back to login
				</Link>
			</JumbotronWrapper>
		</Col>
	)
}

export default memo(CenterToScreen(Register));
