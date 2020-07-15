import { Roles } from 'config'
import { Users, Orders, Products } from 'components';

// TODO:
/*
* 1. Make title optional
* 2. Make title multi type support ie: (string, node, react element)
* 3. Add child route support
* */
// when omit the permission or permission is a empty array it means all authenticated users/roles have access to that route
export default [
	{
		component: Users,
		path: '/users',
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
		path: '/orders',
		title: 'Orders',
		permission: [
			Roles.SUPER_ADMIN,
			Roles.ADMIN,
			Roles.MANAGER
		],
		children: [
			{
				component: Products,
				path: '/:id',
				title: 'Orders Details',
			}
		]
	},
	{
		component: Products,
		path: '/',
		title: 'Products',
	}
]
