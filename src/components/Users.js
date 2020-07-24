import React, { memo } from 'react';
import { users } from '__mock__';

function Users() {
	return (
		<ul className="w3-ul w3-card-4" style={{background: '#fff', margin: '100px 0'}}>
			{users.map(user => (
				<li className="w3-bar">
					<img src={user.avatar} className="w3-bar-item w3-circle w3-hide-small" style={{width: '85px'}} alt="user_avatar"/>
					<div className="w3-bar-item">
						<span className="w3-large">{user.firstName} {user.lastName}</span>
						<br />
						<span>{user.email}</span>
					</div>
				</li>
			))}

		</ul>
	)
}

export default memo(Users);
