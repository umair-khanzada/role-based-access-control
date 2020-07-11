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
			if(!permission) return true;
			else if(Array.isArray(permission) && !permission.length) return true;
			else return intersection(permission, roles).length;
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
				{allowedRoutes.map(({ url, component: RouteComponent }) => (
					<Route
						exact
						key={url}
						path={`${match.path}${url}`}
					>
						<RouteComponent />
					</Route>
				))}
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</Fragment>
	);
}

export default PrivateRoutes;
