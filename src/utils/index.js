import { intersection } from 'lodash';

export function isLoggedIn() {
	return !!localStorage.getItem('roles')
}

export function isArrayWithLength(arr) {
	return (Array.isArray(arr) && arr.length)
}

export function getAllowedRoutes(routes) {
	const roles = JSON.parse(localStorage.getItem('roles'));
	return routes.filter(({ permission }) => {
		if(!permission) return true;
		else if(!isArrayWithLength(permission)) return true;
		else return intersection(permission, roles).length;
	});
}
