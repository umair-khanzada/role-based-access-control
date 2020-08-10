import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Routes from 'routes';

class App extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Col className="p-0">
						<Routes />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
