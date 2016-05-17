import React from 'react';
import products from '../collections/product';

import Rayon from 'rayon';


export default React.createClass({
	getInitialState: function(){
		return{
			modalVisible: false,
		};
	},

	render: function(){
		return(
			<tr>
			    <td ref="productName">{this.props.productName}</td>
			    <td ref="productPrice">{this.props.productPrice}</td>
			    <td ref="category">{this.props.category}</td>
			    <td><input type="button" value="edit"/></td>
			    <td><input type="button" onClick={this.openModal} value="delete"/> 
			    <div>
                <Rayon isOpen={this.state.modalVisible} onClose={this.closeModal}>
                    <header>Are you sure?</header>
                    <section>Are you sure you want to delete this item?</section>
                    <footer>
                        <button onClick={this.closeModal}>Cancel</button>
                        <button onClick={this.deleteConfirm}>delete</button>
                    </footer>
                </Rayon>
            	</div> 
            </td>
			</tr>);
		
	},

	openModal: function(e) {
	console.log('hello');
	e.preventDefault();
    this.setState({
            modalVisible: true
        });
    },
    closeModal: function() {
        this.setState({
            modalVisible: false
        });
	},
	deleteConfirm: function(e){
    	e.preventDefault();
    console.log(this.props);
    this.props.product.destroy();
    },

});



