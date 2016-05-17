import React from 'react';
import InventoryNavigation from './inventorynavigation' ;
import AddPage from './addpage';
import UserModel from '../models/user';
import products from '../collections/product';
import AddInventoryRow from './addInventoryRow';
import SearchBar from './search_bar';


export default React.createClass({
	getInitialState: function(){
		return {
			products: products,
			currentUser: UserModel,	
		};

	},

	componentDidMount: function(){
		products.on('update', () =>{
			this.setState({products: products});
			});
		products.fetch();
		// console.log(products.fetch());

	},
	render: function(){
		//console.log(this.state.currentUser);
		let currentUserId = this.state.currentUser.id
		// console.log(currentUserId);
		
		const currentUserInventory = this.state.products.filter((product)=>{
			//console.log(product)
				if (product.get('userId') ===  currentUserId) {
					return true;
				}
		});

		const inventoryProduct = currentUserInventory.map((product, index, array)=>{
			//console.log(product)
			return (
				 
				<AddInventoryRow
				key={index} 
				productName={product.get('productName')}
				productPrice={product.get('productPrice')}
				category={product.get('category')}
				product={product}
				/>
		
				);
				
		});

		return(
		<div className="inventory-page">
		<InventoryNavigation/>
		<SearchBar/>
		<table className="inventory-table">
			  <thead>
			  	<tr>
				    <th>Product</th>
				    <th>Price</th>
				    <th>Category</th>
				    <th>Edit</th>
				    <th>Delete</th>
			    </tr>
			  </thead>
			  <tbody>{inventoryProduct}</tbody>
		</table>
		</div>);

	},

});



