import React from 'react';
import $ from 'jquery';
import Navigation from './navigation';
import {hashHistory} from 'react-router';
import user from '../models/user';


export default React.createClass({
	getInitialState: function(){
		return{
			errors: {},
			user: user
		}
	},
	render: function(){
		return(
			<div>
			<Navigation/>
			<div className="login-box">
				<h2> Login </h2>
				<form onSubmit={this.login} className="login">
					<div className="login-email"> Email
					<input type="text" ref="email" />
					<div className="error"> {this.state.errors.email ? this.state.errors.email.message: null} </div>
					</div>
					<div className="login-password"> Password
					<input type="password" ref="password"/>
					<div className="error"> {this.state.errors.password ? this.state.errors.password.message: null} </div>
					</div>
					<button type="submit">Login</button>
				</form>
			</div>

			</div>);
	},
	login: function(e){
		e.preventDefault();
		$.ajax({
			url:'/auth/login',
			type: 'POST',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value
			},
			success: (loggedArg) => {
				this.state.user.set(loggedArg);
				hashHistory.push('/userinventory');
			},
			error: (errorArg) => {
				this.setState({errors:errorArg.responseJSON});
			}
		});

	}
});