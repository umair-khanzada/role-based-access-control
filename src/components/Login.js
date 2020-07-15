import React, { useState } from 'react';
import { Alert, Form, Button, Row, Col } from 'react-bootstrap';
import { JumbotronWrapper } from './common';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Login() {
	let [selected, setSelected] = useState([]);
	let history = useHistory();

	function handleChange(e) {
		const { options } = e.target;
		let selected = [];

		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				selected.push(options[i].value);
			}
		}
		setSelected(selected);
	}

	function handleClick() {
		localStorage.setItem('roles', JSON.stringify(selected));
		history.push('/app');
	}

	return (
		<JumbotronWrapper title="Login" description="">
			<Form.Group controlId="exampleForm.ControlSelect1">
				<Form.Label>Select Role:</Form.Label>
				<Form.Control
					as="select"
					value={selected}
					onChange={handleChange}
					multiple
				>
					{/* TODO: Dynamic role options */}
					<option value="SUPER_ADMIN">SUPER_ADMIN</option>
					<option value="ADMIN">ADMIN</option>
					<option value="MANAGER">MANAGER</option>
					<option value="CUSTOMER">CUSTOMER</option>
					<option value="GUEST">GUEST</option>
				</Form.Control>
			</Form.Group>
			<Alert variant="primary">Support multi roles.</Alert>
			<Row className="text-right">
				<Col sm={11}>
					<Link to="/forgot-password">Forgot Password</Link>
				</Col>
				<Col sm={1}>
					<Link to="/register">Register</Link>
				</Col>
			</Row>
			<Button
				variant="primary"
				onClick={handleClick}
				disabled={!selected.length}
			>
				Login
			</Button>
		</JumbotronWrapper>
	);
}

export default Login;
