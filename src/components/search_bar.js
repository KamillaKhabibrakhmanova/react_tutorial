// same as const Component = React.Component
import React, { Component } from 'react';

// class-based component needed when you need internal record keeping
// searchBar has access to all of React.Component's functionality
class SearchBar extends Component {
	//every class-based React component must have a render method
	render() {
		return <input />
	}
}

export default SearchBar;