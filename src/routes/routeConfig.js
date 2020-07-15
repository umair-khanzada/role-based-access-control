import { Roles } from 'config'
import { Users, Orders, OrderDetail, OrderList, Products } from 'components';

// TODO:
/*
* 1. Make title optional
* 2. Make title multi type support ie: (string, node, react element)
* 3. Add child route support
* */
// when omit the permission or permission is a empty array it means all authenticated users/roles have access to that route

/*
	Note: RouteConfig object supports all react-router's Route props you may check on the mentioned link.
	https://reactrouter.com/web/api/Route
*/

export default [
	{
		component: Products,
		path: '/',
		title: 'Products',
		exact: true,
	},
	{
		component: Users,
		path: '/users',
		title: 'Users',
		exact: true,
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
				component: OrderDetail,
				path: '/:id',
				title: 'Orders Details',
				exact: true,
			},
			{
				component: OrderList,
				path: '',
				title: 'Orders List',
				exact: true,
			}
		]
	},
]
