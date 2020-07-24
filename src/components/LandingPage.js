import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
	return (
		<div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
			<div className="w3-bar w3-padding w3-card" >
				<div className="w3-display-topleft w3-padding-large w3-xlarge">
					RBAC-V2
				</div>
				<div className="w3-right">
					<Link to="/login" className="w3-bar-item">Login</Link>
					<Link to="/register" className="w3-bar-item">Register</Link>
				</div>
			</div>
			<div className="w3-display-middle">
				<h1 className="w3-jumbo w3-animate-top">LANDING PAGE</h1>
				<hr className="w3-border-grey" style={{margin: 'auto', width: '40%'}} />
					<p className="w3-large w3-center">Most web applications have flow like this.</p>
			</div>
			<div className="w3-display-bottomleft w3-padding-large">
				Developed by <a href="https://github.com/umair-khanzada" target="_blank">umair-khanzada</a>
			</div>
		</div>
	)
}

export default memo(LandingPage);
