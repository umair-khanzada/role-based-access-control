// component's config object.
const components = {
	admin: {
		component: 'AdminOnly',
		url: '/admin-only',
		title: 'Admin Only',
		icon: 'menu',
		module: 1
	},
	users: {
		component: 'Users',
		url: '/users',
		title: 'Users',
		icon: 'menu',
		module: 1
	},
	dashboard: {
		component: 'Dashboard',
		url: '/dashboard',
		title: 'Dashboard',
		icon: 'menu',
		module: 1
	},
	manager: {
		component: 'Manager',
		url: '/manager',
		title: 'Manager',
		icon: 'menu',
		module: 1
	},
	customers: {
		component: 'Customers',
		url: '/customers',
		title: 'Customers',
		icon: 'menu',
		module: 1
	},
	service1: {
		component: 'Service1',
		url: '/service1',
		title: 'Service1',
		icon: 'menu',
		module: 1
	},
	service2: {
		component: 'Service2',
		url: '/service2',
		title: 'Service2',
		icon: 'menu',
		module: 1
	}
};

// modules for grouping.
const modules = {
	0: {
		title: 'Dashboard',
		icon: 'home',
		isExpendable: true
	}
};

// component's access to roles.
const rolesConfig = {
	admin: {
		routes: [...Object.values(components)]
	},
	manager: {
		routes: [
			components.dashboard,
			components.manager,
			components.customers,
			components.service1,
			components.service2
		]
	},
	customer: {
		routes: [components.service1, components.service2]
	},
	common: {
		routes: [
			{
				component: 'Home',
				url: '/',
				title: 'Home',
				icon: 'menu',
				module: 1
			},
			{
				component: 'Profile',
				url: '/profile',
				title: 'Profile',
				icon: 'menu',
				module: 1
			}
		]
	}
};

export { modules, rolesConfig };
