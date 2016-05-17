import React from 'react';
import Navigation from './navigation';




export default React.createClass({

	render: function(){
		return (
			<div className="home-page">
				<Navigation/>
				<section className="main-title"> Welcome to Inventory Me 
				<section className="main-subtitle"> Keep track of all your stuff!</section>
				</section>
				
				<section className="required-title"> You must log in before accessing the system </section>
				<section className="main-buttons">
				<button> <a href="#login" className="login-button"> Login </a> </button>
				<button> <a href="#register" className="register-button"> Register </a> </button>
				</section>
			</div>);
	}
});