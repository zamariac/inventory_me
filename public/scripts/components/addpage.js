import React from 'react';
import $ from 'jquery';
import InventoryNavigation from './inventorynavigation';
import ProductCollection from '../collections/product';
import user from '../models/user';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';

export default React.createClass({
	getInitialState: function(){
		return{
			user:user

		};
	},
	componentDidMount: function(){
		this.state.user.on('add', ()=>{
			this.setState({
				user:user
			});
		});

	},

	addProduct: function(e){
		e.preventDefault();

			let newProduct =  {
				productName: this.refs.productName.value,
				productPrice: this.refs.productPrice.value,
				category: this.refs.category.value,
				quantity: this.refs.productQuantity.value,
				description: this.refs.productDescription.value
			};

			ProductCollection.create(newProduct);
			hashHistory.push('/userinventory');
	},

	render: function(){
		return(
			<div className="add-page">
			<InventoryNavigation/>
			<form className="addproduct-form"> Add Product
			<div> Product Name
			<input type="text" ref="productName"/>
			</div>
			<div> Price
			<input type="text" ref="productPrice"/>
			</div>
			<div> Category 
				<select name="select" ref="category">
					  <option value="value1">Value 1</option> 
					  <option value="value2">Value 2</option>
					  <option value="value3">Value 3</option>
				</select>
			</div>
			<div> Quantity
			<input type="text" ref="productQuantity"/>
			</div>
			<div> Description
			<input type="text" ref="productDescription"/>
			</div>
			<button> <Link to="/userinventory"> Cancel </Link> </button>
			<button  onClick = {this.addProduct} > Add Product </button>

			</form>
			</div>);
	}
});
