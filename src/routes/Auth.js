import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';

function Auth() {
	return JSON.parse(localStorage.getItem('roles')) ? (
			<Redirect to="/app" />
		) : (
			<PublicRoutes />
		)
}

export default memo(Auth);
