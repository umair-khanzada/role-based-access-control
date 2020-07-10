import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Register, ForgotPassword } from 'components';
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
				<Route exact path="/">
					<Login />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</Fragment>
	)
}

export default PublicRoutes;
