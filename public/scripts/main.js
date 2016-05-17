import $ from 'jquery';
import Backbone from 'backbone';
window.jQuery = $;
window.$ = $;

$.ajaxSetup({
	headers: {
		Accept: 'application/json'
	}
});



import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Home from './components/home';
import Navigation from './components/navigation';
import Login from './components/login';
import Register from './components/register';
import UserInventory from './components/userinventory';
import InventoryNavigation from './components/inventorynavigation';
import AddPage from './components/addpage';
import InventoryRow from './components/addInventoryRow';
import ViewPage from './components/view_page';




ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register}/>
			<Route path="/userinventory" component={UserInventory}/>
			<Route path="/addpage" component={AddPage}/>
			<Route path="/inventoryrow" component={InventoryRow}/>
			<Route path="/viewpage" component={ViewPage}/>
 		</Router>
	), document.querySelector('main')
);