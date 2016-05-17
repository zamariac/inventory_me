import React from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import $ from 'jquery';
import user from '../models/user';

export default React.createClass({
	getInitialState: function(){
		return{
			user: user,
		};
	},
	render: function(){
		return (
		<div>
			<nav className="inventory-navigation">
				<Link to="/" className="logo"> InventoryME</Link>
				<a href="#" className="logout-nav" onClick={this.logout}>Logout</a>
				<a href="/addpage" className="addproduct-nav" onClick={this.addproduct}>Add Product</a>
			</nav>
		</div>);

	},

	logout: function(e){
		e.preventDefault();
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url:'/auth/logout'
		});
		hashHistory.push('/');

	},
	addproduct: function(e){
		e.preventDefault();
		hashHistory.push('/addpage');
	},
});