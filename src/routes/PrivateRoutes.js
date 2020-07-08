import React, { Fragment } from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { uniqBy } from 'lodash';
import { rolesConfig } from '../config/roles';
import * as Components from 'components';
import Navigation from 'components/common/Navigation';
import NotFound from 'components/common/NotFound';

function PrivateRoutes() {
	let allowedRoutes = [],
		match = useRouteMatch('/app');

	/* TODO: Replace hardcoded roles with redux, localStorage, or get from server. */
	let roles = JSON.parse(localStorage.getItem('roles'));
	if (roles) {
		roles = ['common', ...roles];

		let routes = roles.reduce((acc, role) => {
			return [...acc, ...rolesConfig[role].routes];
		}, []);

		// For removing duplicate entries, compare with 'url'.
		allowedRoutes = uniqBy(routes, 'url');
	} else {
		return <Redirect to="/" />
	}
	return (
		<Fragment>
			<Navigation
				routes={allowedRoutes}
				path={match.path}
			/>
			<Switch>
				{allowedRoutes.map((route) => (
					<Route
						exact
						key={route.url}
						component={Components[route.component]}
						path={`${match.path}${route.url}`}
					/>
				))}
				<Route component={NotFound} />
			</Switch>
		</Fragment>
	);
}

export default PrivateRoutes;
