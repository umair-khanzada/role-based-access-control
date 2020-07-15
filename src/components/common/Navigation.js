import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, useHistory } from "react-router-dom";


function Navigation(props) {
	let history = useHistory();

	function handleLogout() {
		localStorage.removeItem('roles');
		history.push('/');
	}

	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand>
				<Link to="/app" style={{ color: '#fff' }}>
					Role-Based-Access-Control-V2
				</Link>
			</Navbar.Brand>
			<Nav className="mr-auto">
				{props.routes.map((route) => (
					<Link
						key={route.path}
						className="nav-link"
						to={`${props.path}${route.path}`}
					>
						{route.title}
					</Link>
				))}
			</Nav>
			<Button onClick={handleLogout}>Logout</Button>
		</Navbar>
	);
}

Navigation.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired
		})
	).isRequired,
	path: PropTypes.string.isRequired
};

export default Navigation;
