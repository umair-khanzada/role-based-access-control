import React, { memo } from 'react';
import { JumbotronWrapper } from './common';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OrderDetail() {
	return (
		<JumbotronWrapper title="Order Detail">
			<Row className="text-right">
				<Col sm={1}>
					<Link to="/app/orders">Back to Orders</Link>
				</Col>
			</Row>
		</JumbotronWrapper>
	)
}

export default memo(OrderDetail);
