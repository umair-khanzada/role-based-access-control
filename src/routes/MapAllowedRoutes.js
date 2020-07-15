import React, { memo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { isArrayWithLength } from 'utils';
import { NotFound } from 'components/common';

function MapAllowedRoutes({routes, basePath}) {
	const match = useRouteMatch(basePath);
	return (
		<Switch>
			{routes.map((route) => {
				/*
				* some variables are used by below code
				* some are not used by code but destructure due to remove from rest object
				* rest object only contain props that supported by react-router's route component
				*  you may find using props list here https://reactrouter.com/web/api/Route
				*/
				const { path, component: Component, children, title, permission, ...rest } = route;
				return (
					<Route
						{...rest}
						key={path}
						path={`${match.path}${path}`}
					>
						{
							isArrayWithLength(children) ?
								<Component children={children} /> :
								<Component />
						}
					</Route>
				)
			})}
			<Route>
				<NotFound />
			</Route>
		</Switch>
	)
}

export default memo(MapAllowedRoutes);
