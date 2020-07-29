import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Register, ForgotPassword, LandingPage } from 'components';
import { NotFound } from 'components/common';

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
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</Fragment>
	)
}

export default PublicRoutes;
