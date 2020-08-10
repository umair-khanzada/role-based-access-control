import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Register, ForgotPassword, LandingPage } from 'components';

function PublicRoutes() {
	return (
		<Fragment>
			<Switch>
				<Route path="/forgot-password">
					<ForgotPassword />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="">
					<LandingPage />
				</Route>
			</Switch>
		</Fragment>
	)
}

export default PublicRoutes;
