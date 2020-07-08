import React from 'react';
import JumbotronWrapper from './common/JumbotronWrapper';

// Private routes.
const AdminOnly = () => <JumbotronWrapper title="Admin Only" />;
const Users = () => <JumbotronWrapper title="Users" />;
const Dashboard = () => <JumbotronWrapper title="Dashboard" />;
const Manager = () => <JumbotronWrapper title="Manager" />;
const Customers = () => <JumbotronWrapper title="Customers" />;
const Service1 = () => <JumbotronWrapper title="Service1" />;
const Service2 = () => <JumbotronWrapper title="Service2" />;
const Profile = () => <JumbotronWrapper title="Profile" />;
const Home = () => <JumbotronWrapper title="Home" />;

export {
	AdminOnly,
	Users,
	Dashboard,
	Manager,
	Customers,
	Service1,
	Service2,
	Profile,
	Home
};
