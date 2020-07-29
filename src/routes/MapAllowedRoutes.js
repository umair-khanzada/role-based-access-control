import React, { memo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { NotFound } from 'components/common';

/*
* This is the route utility component used for generating
* routes and child routes it only requires routes array and basePath
*/
function MapAllowedRoutes({routes, basePath, isAddNotFound}) {
	const match = useRouteMatch(basePath);
	return (
		<Switch>
			{routes.map((route) => {
				/*
				* some variables are used by below code
				* some are not used by the code but destructure due to remove from rest object
				* just make sure that rest object only contain props that supported by react-router's route component
				* you may find props list here https://reactrouter.com/web/api/Route
				*/
				const { path, component: Component, children, title, permission, ...rest } = route;

				return (
					<Route {...rest} key={path} path={`${match.path}${path}`}>
						<Component children={children} />
					</Route>
				)
			})}
			{isAddNotFound && <Route><NotFound /></Route>}
		</Switch>
	)
}

export default memo(MapAllowedRoutes);
