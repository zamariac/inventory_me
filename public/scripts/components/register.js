import React from 'react';
import {hashHistory} from 'react-router';
import Navigation from './navigation';
import user from '../models/user';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function(){
		return {
			errors: {},
			user: user,
		}

	},

	createUser: function(e){
		e.preventDefault();
		$.ajax({
			url: '/auth/register',
			type: 'POST',
			data:{

				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				email: this.refs.email.value,
				password: this.refs.password.value,
			},
			success: (registeredUser) =>{
				this.state.user.set(registeredUser);
				hashHistory.push('/userinventory');
			},

			error: (errorArg) => {
				console.log('hello');
				this.setState({errors:errorArg.responseJSON});
			}

		});
	},
	render: function(){
		return(
		<div>
		<Navigation/>
		<div className="register-box">
			<h2> Register </h2>
			<form className="register" onSubmit = {this.createUser}>
				<div className="register-name" > First Name
				<input type="text" ref="firstName"/>
				</div>
				<div className="register-lastname"> Last Name
				<input type="text" ref="lastName"/>
				</div>
				<div className="error"> {this.state.errors.email ? this.state.errors.email.message : null} </div>
				<div className="register-email" > Email
				<input type="text" ref="email"/>
				</div>
				<div className="error"> </div>
				<div className="register-password" > Password
				<input type="password" ref="password"/>
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
		</div>);
	}
});