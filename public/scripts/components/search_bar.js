import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div className="searchBar">
				<form>
					<input type="text" placeholder="Search"/>
					<input type="submit" value="Search"/>
				</form>
			</div>
			);
	}
});