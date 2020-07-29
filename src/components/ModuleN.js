import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { getAllowedRoutes } from 'utils';
import { JumbotronWrapper } from './common';
import MapAllowedRoutes from 'routes/MapAllowedRoutes';

const basePath = '/app/module-n';
function ModuleN({ children }) {
	const allowedRoutes = getAllowedRoutes(children);
	return (
		<JumbotronWrapper title="Module - N" >
			{allowedRoutes.map(({ path, title }) =>
				<Link key={path} to={`${basePath}${path}`} style={{ marginRight: '10px' }}>{title}</Link>
			)}
			<MapAllowedRoutes
				routes={allowedRoutes}
				basePath={basePath}
			/>
		</JumbotronWrapper>
	)
}

export default memo(ModuleN);
