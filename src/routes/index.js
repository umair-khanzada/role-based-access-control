import React, { memo } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import PrivateRoutes from './PrivateRoutes';
import Auth from './Auth';

function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/app">
					<PrivateRoutes />
				</Route>
				<Route path="">
					<Auth />
				</Route>
			</Switch>
		</Router>
	)
}

export default memo(Routes);

