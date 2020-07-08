import React, { Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import JumbotronWrapper from 'components/common/JumbotronWrapper';
import Login from 'components/Login';
import NotFound from 'components/common/NotFound';

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

function PublicRoutes() {
	return (
		<Fragment>
			<Switch>
				<Route path="/forgot-password">
					<ForgotPassword />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route exact path="/">
					<Login />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</Fragment>
	)
}

export default PublicRoutes;
