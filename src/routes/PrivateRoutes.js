import React, { Fragment } from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { intersection } from 'lodash';
import routes from './routeConfig';
import { Navigation, NotFound } from 'components/common';

function PrivateRoutes() {
	const match = useRouteMatch('/app');
	let roles = JSON.parse(localStorage.getItem('roles'));
	let allowedRoutes = [];

	if (roles) {
		allowedRoutes = routes.filter(({ permission }) => {
			// TODO: Add support if permission is not define then it is accessible for all.
			return intersection(permission, roles).length;
		});
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
						component={route.component}
						path={`${match.path}${route.url}`}
					/>
				))}
				<Route component={NotFound} />
			</Switch>
		</Fragment>
	);
}

export default PrivateRoutes;
