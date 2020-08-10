import { Roles } from 'config'

// Components
import {
	Module1,
	Module2,
	Module3,
	ModuleN,
	ModuleNChild1,
	ModuleNChild2,
	ModuleNChild3,
	Dashboard,
	Profile,
} from 'components';

// TODO:
/*
* 1. Make title optional
* 2. Make title multi type support ie: (string, node, react element)
* 3. Add child route support
* */


/*
* Route config object supports all react-router's route component props with some additional props ie: (title, permission, children)
* you can add or remove props from config object it's means it is super customizable and support upto N nesting, child routes must follow the same parent shape,
* it means the config object is same for both there is no additional key for child nor for parent.
* you can find route props from here https://reactrouter.com/web/api/Route let's take a look at some additional props
* 1. permission: permission is an optional prop and it's type is an array of roles, permission is used for allowing certain users/roles
*  	to have access of that route and if you skip/omit the permission or it's an empty array that means every authenticated user/role have access to that route.
* 2. title: title is an optional prop and it's type is a string|node it is used for mapping route link into a navigation
* 3. children: children is also an optional prop and it's type is an array of route config objects, children are used for nested routes
* */


export default [
	{
		component: Module1,
		path: '/',
		title: 'Module - 1',
		exact: true,
	},
	{
		component: Module2,
		path: '/module-2',
		title: 'Module - 2',
	},
	{
		component: Module3,
		path: '/module-3',
		title: 'Module - 3',
	},
	{
		component: ModuleN,
		path: '/module-n',
		title: 'Module - N',
		permission: [
			Roles.SUPER_ADMIN,
			Roles.ADMIN,
			Roles.MANAGER
		],
		children: [
			{
				component: ModuleNChild1,
				path: '/child-1',
				title: 'Child - 1',
			},
			{
				component: ModuleNChild2,
				path: '/child-2',
				title: 'Child - 2',
			},
			{
				component: ModuleNChild3,
				path: '/child-3',
				title: 'Child - 3',
				permission: [
					Roles.SUPER_ADMIN,
					Roles.ADMIN
				]
			}
		]
	},
	{
		component: Dashboard,
		path: '/dashboard',
		title: 'Dashboard',
		permission: [
			Roles.SUPER_ADMIN,
			Roles.ADMIN,
		],
	},
	{
		component: Profile,
		path: '/profile',
		title: 'Profile',
		permission: [
			Roles.SUPER_ADMIN,
			Roles.ADMIN,
			Roles.MANAGER,
			Roles.CUSTOMER
		],
	},
]
