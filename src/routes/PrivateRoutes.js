import React, { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { getAllowedRoutes } from 'utils';
import RouteConfig from './RouteConfig';
import { TopNav } from 'components/common';
import MapAllowedRoutes from 'routes/MapAllowedRoutes';

function PrivateRoutes() {
	const match = useRouteMatch('/app');
	const roles = JSON.parse(localStorage.getItem('roles'));
	let allowedRoutes = [];

	/*
	* Note:
	*  This app assume if local storage have roles it means
	*  user is authenticated you can update this logic as per your app.
	*/
	if (roles) allowedRoutes = getAllowedRoutes(RouteConfig);
	else return <Redirect to="/" />;

	return (
		<Fragment>
			<TopNav routes={allowedRoutes} path={match.path} className="bg-white" />
			<Container>
				<MapAllowedRoutes routes={allowedRoutes} basePath="/app" />
			</Container>
		</Fragment>
	);
}

export default PrivateRoutes;
