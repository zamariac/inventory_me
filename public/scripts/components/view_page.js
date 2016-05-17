import React from 'react';
import AddPage from './addPage';
import UserModel from '../models/user';
import InventoryNavigation from './inventorynavigation';
import products from '../collections/product';

export default React.createClass({
	render: function(){
		return (
			<div className="ViewPage">
			<InventoryNavigation/>
			</div>
			)

	},

});