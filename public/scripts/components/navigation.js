import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function(){
		return (
		<div>
			<nav className="navigation">
				<Link to="/" className="logo"> InventoryME</Link>
				<Link to="/login" className="login-nav">Login</Link>
				<Link to="/register" className="register-nav">Register</Link>
			</nav>
		</div>);

	}
});


					