import { Roles } from 'config'
import { Users, Orders, Products } from 'components';

// when omit the permission or permission is a empty array it means all authenticated users/roles have access to that route
export default [
	{
		component: Users,
		url: '/users',
		title: 'Users',
		permission: [
			Roles.SUPER_ADMIN,
			Roles.ADMIN
		]
		// icon: 'menu',
		// module: 1
	},
	{
		component: Orders,
		url: '/orders',
		title: 'Orders',
		permission: [
			Roles.SUPER_ADMIN,
			Roles.ADMIN,
			Roles.MANAGER
		]
	},
	{
		component: Products,
		url: '/',
		title: 'Products',
	}
]
