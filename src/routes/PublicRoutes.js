import React, { Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import JumbotronWrapper from '../components/JumbotronWrapper';
import Login from '../components/Login';
import NotFound from '../components/NotFound';

const Register = () => (
	<JumbotronWrapper title="Register">
		<Link className="nav-link" to="/">
			Back to login
		</Link>
	</JumbotronWrapper>
);
const ForgotPassword = () => (
	<JumbotronWrapper title="ForgotPassword">
		<Link className="nav-link" to="/">
			Back to login
		</Link>
	</JumbotronWrapper>
);

const PublicRoutes = ({ match }) => (
	<Fragment>
		<Switch>
			<Route path="/forgot-password" component={ForgotPassword} />
			<Route path="/register" component={Register} />
			<Route exact path="/" component={Login} />
			<Route component={NotFound} />
		</Switch>
	</Fragment>
);

export default PublicRoutes;
