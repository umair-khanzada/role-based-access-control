import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import PrivateRoutes from 'routes/PrivateRoutes';
import Auth from 'routes/Auth.js';
import history from 'util/history';


class App extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Col>
						<Router history={history}>
							<Switch>
								<Route path="/app" component={PrivateRoutes} />
								<Route path="" component={Auth} />
							</Switch>
						</Router>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
