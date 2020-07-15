import React, { memo } from 'react';
import { getAllowedRoutes } from 'utils';
import MapAllowedRoutes from 'routes/MapAllowedRoutes';

function Orders({ children }) {
	const allowedRoutes = getAllowedRoutes(children);
	return (
		<MapAllowedRoutes
			routes={allowedRoutes}
			basePath="/app/orders"
		/>
	)
}

export default memo(Orders);
