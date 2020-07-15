import React, { memo } from 'react';
import { JumbotronWrapper } from './common';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OrderList() {
	return (
		<JumbotronWrapper title="Order List">
			<Row className="text-right">
				<Col sm={1}>
					<Link to="/app/orders/1221">Order detail</Link>
				</Col>
			</Row>
		</JumbotronWrapper>
	)
}

export default memo(OrderList);
