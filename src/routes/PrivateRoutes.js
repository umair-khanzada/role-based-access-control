import React, { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes } from 'utils';
import routes from './routeConfig';
import { Navigation } from 'components/common';
import MapAllowedRoutes from 'routes/MapAllowedRoutes';

function PrivateRoutes() {
	const match = useRouteMatch('/app');
	const roles = JSON.parse(localStorage.getItem('roles'));
	let allowedRoutes = [];

	/*
	* Note:
	*  This app assume if local storage have token it means
	*  user is authenticated you can update this logic as per your app.
	*/
	if (roles) allowedRoutes = getAllowedRoutes(routes);
	else return <Redirect to="/" />;

	return (
		<Fragment>
			<Navigation
				routes={allowedRoutes}
				path={match.path}
			/>
			<MapAllowedRoutes
				routes={allowedRoutes}
				basePath="/app"
			/>
		</Fragment>
	);
}

export default PrivateRoutes;
