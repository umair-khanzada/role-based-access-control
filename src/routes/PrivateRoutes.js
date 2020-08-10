import React, { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes, isLoggedIn } from 'utils';
import { PrivateRoutesConfig } from 'config';
import { TopNav } from 'components/common';
import MapAllowedRoutes from 'routes/MapAllowedRoutes';

function PrivateRoutes() {
	const match = useRouteMatch('/app');
	let allowedRoutes = [];

	if (isLoggedIn()) allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
	else return <Redirect to="/" />;

	return (
		<Fragment>
			<TopNav routes={allowedRoutes} prefix={match.path} className="bg-white" />
			<MapAllowedRoutes routes={allowedRoutes} basePath="/app" isAddNotFound />
		</Fragment>
	);
}

export default PrivateRoutes;
