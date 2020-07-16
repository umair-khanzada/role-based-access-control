import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';

/*
* TODO: when user loggedIn he/she unable to goto public routes
*  ie: ('/about', '/contact', 'any other public route')
*/
function Auth() {
	return JSON.parse(localStorage.getItem('roles')) ? (
			<Redirect to="/app" />
		) : (
			<PublicRoutes />
		)
}

export default memo(Auth);
